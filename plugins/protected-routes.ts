export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    const user = useSupabaseUser()
    if (!user.value) {
      return navigateTo('/login')
    }
  })
}) 