import { createClient } from "@supabase/supabase-js";

// Singleton do cliente Supabase para uso no client/server.
// Certifique-se de definir as variáveis de ambiente no Vercel:
// NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
