import Book from "../model/book.model.js";

// GET /book
export const getBook = async (req, res) => {
  try {
    const books = await Book.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Optional: POST /book
export const createBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;
    const id = await Book.create({ name, price, category, image, title });
    res.status(201).json({ message: "Book created", bookId: id });
  } catch (error) {
    console.error("Create Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Optional: DELETE /book/:id
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.delete(id);
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
