export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'user' | 'admin'

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
          updated_at: string | null
          last_sign_in: string | null
          is_active: boolean
          role: UserRole
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string | null
          last_sign_in?: string | null
          is_active?: boolean
          role?: UserRole
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string | null
          last_sign_in?: string | null
          is_active?: boolean
          role?: UserRole
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
} 