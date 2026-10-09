console.log("Instagram app started!");

async function testSupabase() {
    // Test users
    const { data: users, error: usersError } = await supabaseClient
        .from("users")
        .select("*");

    if (usersError) {
        console.error("Users error:", usersError);
        return;
    }

    console.log("Users from Supabase:", users);

    // Test posts
    const { data: posts, error: postsError } = await supabaseClient
        .from("posts")
        .select("*");

    if (postsError) {
        console.error("Posts error:", postsError);
        return;
    }

    console.log("Posts from Supabase:", posts);
}

testSupabase();