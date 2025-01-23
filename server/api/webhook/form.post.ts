import { defineEventHandler, readBody, createError } from 'h3'
import type { H3Event } from 'h3'

interface WebhookError extends Error {
  statusCode?: number
  data?: unknown
}

interface Attachment {
  data: string
  mimeType: string
  fileName: string
  fileSize: number
  contentType: string
}

interface SupportRequest {
  subject: string
  category: string
  priority: string
  description: string
  user: {
    id: string
    email: string
    name: string
  }
  timestamp: string
  attachments: Attachment[]
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig()
  
  try {
    // Validate config
    if (!config.n8nBaseUrl || !config.n8nWebhookPath) {
      console.error('Missing n8n configuration:', { 
        baseUrl: config.n8nBaseUrl, 
        webhookPath: config.n8nWebhookPath 
      })
      throw createError({
        statusCode: 500,
        message: 'N8N webhook configuration is missing'
      })
    }

    const body = await readBody(event) as SupportRequest
    
    // Validate request body
    if (!body.subject || !body.category || !body.priority || !body.description) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields'
      })
    }

    // Validate attachments
    if (body.attachments?.length) {
      body.attachments.forEach((attachment, index) => {
        if (!attachment.data || !attachment.fileName || !attachment.contentType) {
          console.error('Invalid attachment:', {
            index,
            hasData: !!attachment.data,
            hasFileName: !!attachment.fileName,
            hasContentType: !!attachment.contentType
          })
          throw createError({
            statusCode: 400,
            message: `Invalid attachment at index ${index}: missing required fields`
          })
        }
      })
    }
    
    // Construct the full webhook URL
    const webhookUrl = `${config.n8nBaseUrl}${config.n8nWebhookPath}`
    
    console.log('Request details:', {
      url: webhookUrl,
      method: 'POST',
      body: {
        ...body,
        attachments: body.attachments?.map(a => ({ 
          fileName: a.fileName, 
          contentType: a.contentType, 
          fileSize: a.fileSize 
        })) // Log attachment metadata only
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    
    // Forward the request to n8n with timeout
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000) // 10 second timeout
    })

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      console.error('N8N webhook returned non-JSON response:', {
        status: response.status,
        contentType,
        url: webhookUrl
      })
      throw createError({
        statusCode: 503,
        message: 'N8N webhook returned invalid response format'
      })
    }

    const responseText = await response.text()
    console.log('N8N Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText
    })

    // Parse response text as JSON if possible
    let data
    try {
      data = JSON.parse(responseText)
    } catch (error) {
      console.error('Failed to parse N8N response:', {
        error,
        responseText,
        contentType
      })
      throw createError({
        statusCode: 503,
        message: 'Invalid response from N8N server'
      })
    }

    // Consider any response with message "Workflow was started" as success
    if (data.message === 'Workflow was started' || response.ok) {
      console.log('N8N webhook success:', data)
      return { success: true, data }
    }

    // Any other response is considered an error
    throw createError({
      statusCode: response.status,
      message: data.message || 'N8N webhook error',
      data: data
    })
  } catch (error: unknown) {
    const err = error as WebhookError
    console.error('Webhook forwarding error:', {
      message: err.message,
      stack: err.stack,
      data: err.data,
      config: {
        baseUrl: config.n8nBaseUrl,
        webhookPath: config.n8nWebhookPath
      }
    })

    // If it's already an H3 error, pass it through
    if (err.statusCode) {
      throw error
    }

    // Handle specific error types
    if (err instanceof TypeError) {
      if (err.message === 'Failed to fetch') {
        throw createError({
          statusCode: 503,
          message: 'Unable to reach N8N server. Please check if N8N is running.'
        })
      }
      if (err.message.includes('timeout')) {
        throw createError({
          statusCode: 504,
          message: 'N8N server took too long to respond.'
        })
      }
    }

    return { 
      success: false, 
      error: err.message || 'Failed to process webhook',
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    }
  }
}) 