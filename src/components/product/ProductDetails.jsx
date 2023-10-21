import { useParams } from "react-router-dom";
import '../styles.css';
import useGetProduct from "./useGetProduct"; 
import Loading from "../Loading";

function ProductDetails() {
  const params = useParams();
  const [loading, error, product] = useGetProduct(params.id);


  return (
    <div className="container mt-5">
      <Loading loading={loading} error={error}>
        {product && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Loading>
    </div>
  );
}

export default ProductDetails;
