import { Pool } from "pg";

const pool = new Pool({
    user : process.env.db.user,
    host : 'localhost',
    database : process.env.db.database,
    password : process.env.db.password,
    port : 5432,
});

export default pool;