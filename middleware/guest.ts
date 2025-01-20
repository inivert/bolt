import { useSupabaseUser } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // If user is authenticated and trying to access login page,
  // redirect them to the dashboard
  if (user.value && to.path === '/login') {
    return navigateTo('/get-started')
  }
})
