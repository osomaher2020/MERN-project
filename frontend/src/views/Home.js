import { useEffect, useState } from "react"
import AddNewBook from "../components/AddNewBook"
import Card from "../components/Card"

const Home = () => {

    const { REACT_APP_SERVER_URI } = process.env

    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            fetch(`${REACT_APP_SERVER_URI}/api/books`)
                .then((result) => result.json())
                .then((data) => { setBooks(data) })
                .catch(err => { console.log(err.message) })
        }

        getBooks()
    }, [REACT_APP_SERVER_URI])

    const updateState = (book) => {
        setBooks([book, ...books])
    }

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {
                        books &&
                        books.map((book) => <Card key={book._id} item={book} />)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <AddNewBook updateState={updateState} />
            </div>
        </div>
    )
}

export default Home