import { useSupabaseClient, useSupabaseUser } from '#imports'
import type { Database } from '~/types/database.types'

export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient<Database>()

  // If no user, redirect to login
  if (!user.value) {
    return navigateTo('/login')
  }

  // Check user role in database
  const { data: userData, error } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.value.id)
    .single()

  if (error || userData?.role !== 'admin') {
    return navigateTo('/dashboard')
  }
}) 