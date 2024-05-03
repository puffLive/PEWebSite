import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hjsmloprfektzyfxyffb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqc21sb3ByZmVrdHp5Znh5ZmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MzM1NTAsImV4cCI6MjAyOTUwOTU1MH0.CLE3mEDcFqjKYDeIM9sYQ5vFBB4B7YGD4Eab8rZMmwo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
