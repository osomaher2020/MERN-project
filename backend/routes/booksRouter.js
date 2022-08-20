import { Router } from "express"
import BooksController from "../controllers/BookCotroller"

const booksRouter = Router()

// middleware
booksRouter.use((req, res, next) => {
    console.log("Middleware for -> Books only")

    next()
})

// --- books routes ---
// list All
booksRouter.get("/", BooksController.listAll)
// get single book
booksRouter.get("/:id", BooksController.getOne)
// Create New
booksRouter.post("/", BooksController.createNew)
// update Book
booksRouter.put("/:id", BooksController.updateOne)
// delete
booksRouter.delete("/:id", BooksController.deleteOne)

export default booksRouter