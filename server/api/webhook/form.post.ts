import { defineEventHandler, readBody, createError } from 'h3'
import type { H3Event } from 'h3'

interface WebhookError extends Error {
  statusCode?: number
  data?: unknown
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

    const body = await readBody(event)
    
    // Construct the full webhook URL
    const webhookUrl = `${config.n8nBaseUrl}${config.n8nWebhookPath}`
    
    // Check if n8n is accessible
    try {
      const healthCheck = await fetch(config.n8nBaseUrl, {
        method: 'GET',
        signal: AbortSignal.timeout(5000) // 5 second timeout
      })
      if (!healthCheck.ok) {
        throw createError({
          statusCode: 503,
          message: 'N8N server is not responding'
        })
      }
    } catch (error) {
      console.error('N8N health check failed:', error)
      throw createError({
        statusCode: 503,
        message: 'Unable to connect to N8N server. Please ensure N8N is running.'
      })
    }
    
    console.log('Request details:', {
      url: webhookUrl,
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000',
        'Connection': 'keep-alive'
      }
    })
    
    // Forward the request to n8n with timeout
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000',
        'Connection': 'keep-alive'
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000) // 10 second timeout
    })

    const responseText = await response.text()
    console.log('N8N Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      body: responseText
    })

    if (!response.ok) {
      console.error('N8N webhook error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
        url: webhookUrl
      })
      
      throw createError({
        statusCode: response.status,
        message: `N8N webhook error: ${response.statusText}`,
        data: responseText
      })
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      console.log('Response was not JSON:', responseText)
      data = { raw: responseText }
    }

    console.log('N8N webhook success:', data)
    return { success: true, data }
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