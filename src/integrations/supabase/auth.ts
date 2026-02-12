import { supabase } from "./client";
import type { Database } from "./types";

export type AppRole = Database["public"]["Enums"]["app_role"];

export const auth = {
  async signIn(email: string, password: string) {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async signUp(email: string, password: string, fullName: string) {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: fullName },
      },
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getUserRoles(userId: string): Promise<AppRole[]> {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);
    
    if (error) {
      console.error("Error fetching user roles:", error);
      return [];
    }
    
    if (data) {
      return data.map((r) => r.role as AppRole);
    }
    return [];
  },
  
  onAuthStateChange: (callback: (event: any, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  },

  getSession: () => {
    return supabase.auth.getSession();
  }
};
