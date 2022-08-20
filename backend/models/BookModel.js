import mongoose from "mongoose"

// Schema defines the [[[ structure ]]] of a document
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

// Model is used to interact with a Collection and apply the Schema on it
export default mongoose.model('Book', bookSchema) // 'Book' singular -> automatically creates "books" Collection
// ex: we will use (Book.find(), .create(), ...) in other files to list all "books" Collection