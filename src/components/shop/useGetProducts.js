import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProductsData((prev) => [...prev, ...res.data]);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError("Error retrieving products data from fakestoreapi.com/products");
            }
        };
        loadProducts();
    }, []);

    return [loading, error, productsData]
};

export default useGetProducts;