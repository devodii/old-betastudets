/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createClient } from '@supabase/supabase-js';

export default createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);
