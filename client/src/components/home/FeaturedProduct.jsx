import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import Loading from "../../Pages/Loading";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
        setProducts(res.data.products);
        setLoading(false);
        console.log(res.data);
      });
    };
    fetch();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {products.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-3xl font-bold">Products not found</h1>
            </div>
          ) : (
            <div className="min-h-screen grid grid-cols-3 gap-2">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturedProduct;
