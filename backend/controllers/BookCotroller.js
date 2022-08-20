import mongoose from "mongoose"
import Book from "../models/BookModel"
// *** remember -> model('Book', bookSchema)

class BooksController {
    static listAll = async (_req, res) => {
        try{
            const books = await Book.find({}).sort({createdAt: -1}) // {} --> no filter applied
            res.status(200).json(books)
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    static getOne = async (req, res) => {
        try{
            const id = req.params.id

            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({error: "Not a valid id"})
            }

            // execute the request
            const book = await Book.findById(id)

            if(!book){
                return res.status(404).json({error: "No such book"})
            }

            res.status(200).json(book)
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    static createNew = async (req, res) => {
        const { title, author, price } = req.body

        try{
            const book = await Book.create({
                title,
                author,
                price
            })

            res.status(200).json(book)
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    }


    static deleteOne = async (req, res) => {
        try{
            const id = req.params.id

            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({error: "Not a valid id"})
            }

            // execute the request
            const book = await Book.findOneAndDelete({_id: id})

            if(!book){
                return res.status(404).json({error: "No such book"})
            }

            res.status(200).json(book)
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }


    static updateOne = async (req, res) => {
        try{
            const id = req.params.id

            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({error: "Not a valid id"})
            }

            // execute the request
            const book = await Book.findOneAndUpdate({_id: id},
                    {
                        ...req.body
                    }
                )

            if(!book){
                return res.status(404).json({error: "No such book"})
            }

            res.status(200).json(book)
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}

export default BooksController