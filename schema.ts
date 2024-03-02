export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      brands: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string
          slug?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          description: string
          id: number
          image_url: string | null
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          image_url?: string | null
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          image_url?: string | null
          name?: string
          slug?: string
        }
        Relationships: []
      }
      employees: {
        Row: {
          created_at: string | null
          id: string
          is_admin: boolean | null
        }
        Insert: {
          created_at?: string | null
          id: string
          is_admin?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_admin?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_id_profiles_id_fk"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          created_at: string
          date: string
          description: string
          id: number
          image_url: string | null
          location: string
          price: number | null
          slug: string
          time: string
          title: string
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          id?: number
          image_url?: string | null
          location: string
          price?: number | null
          slug: string
          time: string
          title: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          id?: number
          image_url?: string | null
          location?: string
          price?: number | null
          slug?: string
          time?: string
          title?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          height: number | null
          id: number
          product_id: number | null
          url: string | null
          width: number | null
        }
        Insert: {
          height?: number | null
          id?: number
          product_id?: number | null
          url?: string | null
          width?: number | null
        }
        Update: {
          height?: number | null
          id?: number
          product_id?: number | null
          url?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "images_product_id_products_id_fk"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      order_items: {
        Row: {
          id: number
          order_id: string
          price: number
          product_id: number
          quantity: number | null
        }
        Insert: {
          id?: number
          order_id: string
          price: number
          product_id: number
          quantity?: number | null
        }
        Update: {
          id?: number
          order_id?: string
          price?: number
          product_id?: number
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_orders_id_fk"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_products_id_fk"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          city: string | null
          created_at: string | null
          id: string
          order_amount: number | null
          order_status: Database["public"]["Enums"]["order_status"] | null
          phone_number: string | null
          postal_code: number | null
          profile_id: string
          street_address: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string | null
          id?: string
          order_amount?: number | null
          order_status?: Database["public"]["Enums"]["order_status"] | null
          phone_number?: string | null
          postal_code?: number | null
          profile_id: string
          street_address?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string | null
          id?: string
          order_amount?: number | null
          order_status?: Database["public"]["Enums"]["order_status"] | null
          phone_number?: string | null
          postal_code?: number | null
          profile_id?: string
          street_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          brand_id: number | null
          category_id: number
          created_at: string | null
          description: string
          id: number
          name: string
          price: number
          slug: string
          status: Database["public"]["Enums"]["status"]
          stock: number
        }
        Insert: {
          brand_id?: number | null
          category_id: number
          created_at?: string | null
          description: string
          id?: number
          name: string
          price?: number
          slug: string
          status?: Database["public"]["Enums"]["status"]
          stock?: number
        }
        Update: {
          brand_id?: number | null
          category_id?: number
          created_at?: string | null
          description?: string
          id?: number
          name?: string
          price?: number
          slug?: string
          status?: Database["public"]["Enums"]["status"]
          stock?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          first_name: string
          id: string
          last_name: string
          updated_at: string | null
        }
        Insert: {
          first_name: string
          id: string
          last_name: string
          updated_at?: string | null
        }
        Update: {
          first_name?: string
          id?: string
          last_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
      order_status: "pending" | "processing" | "completed"
      status: "draft" | "active"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
