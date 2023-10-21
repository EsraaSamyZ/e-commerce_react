import { useEffect, useState } from "react";

const useGetProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Error retrieving product data: ${response.status}`);
        }

        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    getSingleProduct();
  }, [productId]);

  return [loading, error, product];
};

export default useGetProduct;
