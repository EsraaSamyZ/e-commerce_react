import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles.css';

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  function getSingleProduct() {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="container">
      {/* <h2 className="mt-5">Product Details</h2> */}
      <div className="card border-0 mt-3">
        <div className="row">
          <div className="col-md-4">
            <img src={product.image} className="card-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Category: {product.category}</p>
              {product.rating && (
                <p className="card-text">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
