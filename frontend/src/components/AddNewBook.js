import { useState } from "react"

const AddNewBook = ({updateState}) => {

    const { REACT_APP_SERVER_URI } = process.env

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const book = {title, author, price}

        const response = await fetch(`${REACT_APP_SERVER_URI}/api/books`, {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                'content-type': "application/json"
            }
        })

        // console.log(response)

        const result = await response.json()

        // console.log(result)

        if(response.ok){
            setError(null)

            setTitle('')
            setAuthor('')
            setPrice('')

            updateState(result)
        }
        else{
            setError(result.error)
        }
    }

    return (
        <form className="mt-2 mb-2 ps-4 border-start" onSubmit={handleSubmit}>
            <h3>Add new Book</h3>
            <hr />
            <div className="mb-1">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="titleHelp"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <div id="titleHelp" className="form-text">* Make an inspirational Name.</div>
            </div>
            <div className="mb-1">
                <label htmlFor="author" className="form-label">Author</label>
                <input type="text" className="form-control" id="author"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
            </div>
            <div className="mb-1">
                <label htmlFor="price" className="form-label">Price</label>
                <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="number" className="form-control" id="price" aria-label="Amount (to the nearest dollar)"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                    <span className="input-group-text">.00</span>
                </div>
            </div>
            <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Agree on Terms and Conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

            {error &&
                <div className="alert alert-danger mt-3">{error}</div>
            }
        </form>
    )
}

export default AddNewBook