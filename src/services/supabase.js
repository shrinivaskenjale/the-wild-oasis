import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dutduonmyxkrrtlmciul.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dGR1b25teXhrcnJ0bG1jaXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NDE4MzgsImV4cCI6MjAwNDExNzgzOH0.71EM0uoLmkTbBoHE8gWgDuWbDIBEsN1fhk9Wdgz3URg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
