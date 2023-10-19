import { useState, useEffect } from "react";
import './styles.css';

function Shop() {
  const [products, setProducts] = useState([]);

  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function editDescriptionLength(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  function editTitleLength(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div className="container">
      <h2 className="mt-5">Shop Page</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card border-0 shadow">
              <div style={{ width: '200px', height: '278px' }} className="d-flex justify-content-center align-items-center">
                <img
                  src={product.image}
                  className=""
                  alt={product.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                {editTitleLength(product.title, 50)}
                  </h5>
                <p className="card-text">
                  {editDescriptionLength(product.description, 100)}
                </p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                {product.rating && (
                  <p className="card-text">
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
                  </p>
                )}
                <a href={`/shop/${product.id}`} className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
