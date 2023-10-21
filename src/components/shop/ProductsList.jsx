import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => (
  <div className="card-deck">
    <div className="row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductsList;
