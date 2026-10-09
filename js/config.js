const SUPABASE_URL = "https://lucehcnqgkfhxrivmttv.supabase.co";
const SUPABASE_KEY = "sb_publishable_J9YYhyxbqDdBuaPPup2ylg_cW8tvYkG";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase connected successfully!");