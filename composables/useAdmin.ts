import { useSupabaseUser, useSupabaseClient } from '#imports'
import type { Database } from '~/types/database.types'

export const useAdmin = () => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient<Database>()

  const isAdmin = computed(() => user.value?.user_metadata?.role === 'admin')

  const checkAdminStatus = async () => {
    const { data, error } = await supabase
      .rpc('is_admin')

    if (error) {
      console.error('Error checking admin status:', error)
      return false
    }

    return data
  }

  return {
    isAdmin,
    checkAdminStatus
  }
} 