
import pool from "../db.js";

export const getAllUsers = async () => {
const query = "SELECT * FROM users"
const result = await pool.query(query);

  return result.rows;
};