import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import mongoose from "mongoose"

import booksRouter from "./routes/booksRouter"

dotenv.config()

const { HOST, PORT, MONGO_URI, FRONT_URI } = process.env


const app = express()

// middleware
app.use(express.json()) // so you can access -> req.body

// cors
var corsOptions = {
    origin: `${FRONT_URI}`,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use((_req, _res, next) => {
    console.log("Middleware for -> entire app")

    next()
})

app.use("/api/books", booksRouter)

// app routes
app.get("/", (_req, res) => {
    res.json({ message: "Home Page" })
})


// ============ Mongoose =============
// $ npm i mongoose
// ODM (Object Data Modelling): provides a schema-based solution to model your application data.
// >> ex: const Cat = mongoose.model('Cat', { name: String })
// >> if we passed any type other than String to the name property --> it will emit an error == we should match the Model = (Schema)

// ** It includes built-in type casting, validation, query building, ...
// to make sure that every document in the DB follows the same predictable structure (Schema)

// Schema: defines a structure of a particular Document inside our DB

// connect to the DB
mongoose.connect(MONGO_URI) // Async process which return a Promise
    .then(() => {
        // run the app after successfully connected
        app.listen(PORT, () => {
            console.log(`connected to DB & listining on ${HOST}:${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

// app.listen(PORT, () => {
//     console.log(`listining on ${HOST}:${PORT}`)
// })