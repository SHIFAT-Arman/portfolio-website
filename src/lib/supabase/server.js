import { createServerClient } from '@supabase/ssr';

export function createClient(cookieStore) {
  // Use a fallback object if cookieStore is not provided
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
            // This may occur when called outside a request context.
            console.error("Error setting cookies:", error);
          }
        },
      },
    }
  );
}
