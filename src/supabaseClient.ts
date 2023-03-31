import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://blalvpbqrfkcgkhdyhoc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsYWx2cGJxcmZrY2draGR5aG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5NDA1MjYsImV4cCI6MTk5NTUxNjUyNn0.SEYKzh8XTQWikOFyUkO5f-4BH_dV-eGq67idgwd6PxM"
);
