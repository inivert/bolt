import { useSupabaseClient, useSupabaseUser } from '#imports'
import type { Database } from '~/types/database.types'

export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient<Database>()

  // If no user and trying to access protected routes, redirect to login
  if (!user.value && (to.path.startsWith('/dashboard') || to.path === '/get-started')) {
    return navigateTo('/login')
  }

  // If user exists and trying to access admin routes, verify admin status
  if (user.value && to.path.startsWith('/dashboard/admin')) {
    const { data: userData, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.value.id)
      .single()

    if (error || userData?.role !== 'admin') {
      return navigateTo('/dashboard')
    }
  }
})
