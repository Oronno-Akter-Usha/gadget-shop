/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import axios from "axios";
import Loading from "../../Loading";
import ProductCard from "../../../components/ProductCard";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [latestData, setLatestData] = useState(true);
  const [loading, setLoading] = useState(false);
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      await axios
        .get(`http://localhost:4000/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setWishlist(res.data);
          setLoading(false);
        });
    };
    if (userData._id && token) {
      fetchWishlist();
    }
  }, [token, userData._id, latestData]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">My Wishlist</h1>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            {wishlist.length > 0 ? (
              <div className="grid grid-cols-3 gap-2 mt-12">
                {wishlist.map((product) => (
                  <ProductCard
                    product={product}
                    key={product._id}
                    isInWishlist
                    setLatestData={setLatestData}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center mt-12">
                <h1>No product in your wishlist</h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
