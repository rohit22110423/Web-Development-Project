import db from '../index.js';


const User = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  },

  getByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },

  create: async ({ fullname, email, password }) => {
    const [result] = await db.query(
      "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)",
      [fullname, email, password]
    );
    return result.insertId;
  },

  update: async (id, { fullname, email, password }) => {
    await db.query(
      "UPDATE users SET fullname = ?, email = ?, password = ? WHERE id = ?",
      [fullname, email, password, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
  },
};

export default User;
