export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

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
          role: 'user' | 'admin'
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
          role?: 'user' | 'admin'
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
          role?: 'user' | 'admin'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 