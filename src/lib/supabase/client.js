// Example in your supabase client module
import { createServerClient } from '@supabase/ssr';

export async function createClient(cookieStore = null) {
  const effectiveCookies = cookieStore || {
    getAll: () => [],
    set: () => { },
  };

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      cookies: {
        getAll() {
          return effectiveCookies.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              effectiveCookies.set(name, value, options)
            );
          } catch (error) {
            console.error("Error setting cookies:", error);
          }
        },
      },
    }
  );
}
