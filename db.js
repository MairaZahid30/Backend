import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
    user: process.env.db_user,
    host: "localhost",
    database: process.env.db_database,
    password: process.env.db_password,
    port: 5432,
});

export default pool;