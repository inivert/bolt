export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', (to) => {
    const user = useSupabaseUser()
    if (!user.value && (to.path.startsWith('/dashboard') || to.path === '/get-started')) {
      return navigateTo('/login')
    }
  })
}) 