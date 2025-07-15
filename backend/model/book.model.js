import db from '../index.js';


const Book = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM books");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [id]);
    return rows[0];
  },

  create: async ({ name, price, category, image, title }) => {
    const [result] = await db.query(
      "INSERT INTO books (name, price, category, image, title) VALUES (?, ?, ?, ?, ?)",
      [name, price, category, image, title]
    );
    return result.insertId;
  },

  update: async (id, { name, price, category, image, title }) => {
    await db.query(
      "UPDATE books SET name = ?, price = ?, category = ?, image = ?, title = ? WHERE id = ?",
      [name, price, category, image, title, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM books WHERE id = ?", [id]);
  },
};

export default Book;
