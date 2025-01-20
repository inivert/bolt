import { useSupabaseUser } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Protect all dashboard routes and get-started
  if (!user.value && (to.path.startsWith('/dashboard') || to.path === '/get-started')) {
    return navigateTo('/login')
  }
})
