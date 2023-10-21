import useGetProducts from "./useGetProducts"
import '../styles.css';
import ProductsList from "./ProductsList";
import Loading from "../Loading";

function Shop() {

  const [loading, error, products] = useGetProducts();

  return (
    <div className="container mt-5">
      <Loading loading={loading} error={error}>
        <ProductsList products={products} />
      </Loading>
    </div>
  );
}

export default Shop;
