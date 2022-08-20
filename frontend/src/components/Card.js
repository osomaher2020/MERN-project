const Card = ({ item }) => {
    return (
        <div className="col-md-3 p-0">
            <div className="card m-1">
                <img className="card-img-top" src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" alt="cap" height="120" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.author}</p>
                    <hr />
                    <h6>Price: {item.price} EGP</h6>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{item.createdAt}</small>
                </div>
            </div>
        </div>
    )
}

export default Card