import { useEffect, useState } from "react";
import FilterBar from "../components/products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "./../components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      });
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>
      {/* search and sort */}
      <div className="lg:flex justify-between items-center w-full mb-6">
        <SearchBar />
        ,<SortByPrice />
      </div>
      {/* content */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <FilterBar />
        </div>
        {/* products */}
        <div className="col-span-10">
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
      </div>
    </div>
  );
};

export default Products;
