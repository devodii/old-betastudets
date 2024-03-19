import { Database } from '@betastudents/types';
import { createBrowserClient } from "@supabase/ssr";


export default async function createSupabaseBrowserClient() {
    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )
}