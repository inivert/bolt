import { useSupabaseClient, useSupabaseUser } from '#imports'
import type { Database } from '~/types/database.types'

export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient<Database>()

  // If user is authenticated and trying to access auth pages
  if (user.value && (to.path === '/login' || to.path === '/register')) {
    // Get user role
    const { data: userData, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.value.id)
      .single()

    // Redirect based on role
    if (!error && userData?.role === 'admin') {
      return navigateTo('/dashboard/admin')
    } else {
      return navigateTo('/dashboard')
    }
  }
})
