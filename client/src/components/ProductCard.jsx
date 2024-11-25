/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className="rounded-md border shadow-md">
      <figure>
        <img
          src={product?.imageURL}
          alt="Product Image"
          className=" object-cover h-60 w-full rounded-t-md"
        />
      </figure>
      <div className="p-2">
        <h2 className="text-xl font-bold">{product?.title}</h2>
        <h2 className="font-semibold">{product?.brand}</h2>
        <h2 className="text-sm">Price: ${product?.price}</h2>
        <h2 className="text-sm">In Stock: {product?.stock}</h2>
        <h2 className="text-sm font-semibold">In Stock: {product?.category}</h2>
        <p className="text-xs mt-2">
          {product?.description
            ? product.description.length < 50
              ? product.description
              : `${product.description.slice(0, 50)}...`
            : "No description available"}
        </p>

        <div className="mt-4">
          <button className="btn w-full btn-sm">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
