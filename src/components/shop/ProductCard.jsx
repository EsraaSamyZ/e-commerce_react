function editTextLength(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

function ProductCard({ product }) {
  return (
    <div className="card col-md-3 mb-3" key={product.id}>
      <div className="border-0 h-100">
        <div
          style={{ width: "200px", height: "278px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={product.image} className="" alt={product.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{editTextLength(product.title, 50)}</h5>
          <p className="card-text">
            {editTextLength(product.description, 100)}
          </p>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Category: {product.category}</p>
          {product.rating && (
            <p className="card-text">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}
          <a href={`/shop/${product.id}`} className="btn btn-primary align-self-end">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
