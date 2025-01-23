import { defineEventHandler, readBody } from 'h3'
import { z } from 'zod'

const consultationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  phone: z.string().regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Invalid phone number').optional(),
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const validatedData = consultationSchema.parse(body)

    // TODO: Implement your email service or database storage here
    // For now, we'll just log the data and return a success response
    console.log('Consultation request received:', validatedData)

    return {
      status: 'success',
      message: 'Your consultation request has been received. We will contact you shortly.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        status: 'error',
        message: 'Validation failed',
        errors: error.errors,
      }
    }

    console.error('Error processing consultation request:', error)
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    }
  }
}) 