import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const imageURL = data.imageURL;
    const description = data.description;
    const sellerEmail = user.email;
    const product = {
      title,
      brand,
      price,
      stock,
      category,
      imageURL,
      description,
      sellerEmail,
    };

    const token = localStorage.getItem("access-token");

    axios
      .post("http://localhost:4000/add-products", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    reset();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-12">Add Products</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Product Title"
              className="w-full p-2 border border-black rounded-md"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-light">
                Title is required
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              placeholder="Product Brand"
              className="w-full p-2 border border-black rounded-md"
              {...register("brand", { required: true })}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm font-light">
                Brand is required
              </p>
            )}
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              step="any"
              placeholder="Product Price"
              className="w-full p-2 border border-black rounded-md"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm font-light">
                Price is required
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              placeholder="Product Stock"
              className="w-full p-2 border border-black rounded-md"
              {...register("stock", { required: true })}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm font-light">
                Stock is required
              </p>
            )}
          </div>
        </div>
        <div className="md:flex gap-4 ">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Product Category"
              className="w-full p-2 border border-black rounded-md"
              {...register("category", { required: true })}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm font-light">
                Category is required
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="text"
              placeholder="Product Image URL"
              className="w-full p-2 border border-black rounded-md"
              {...register("imageURL", { required: true })}
            />
            {errors.imageURL && (
              <p className="text-red-500 text-sm font-light">
                Image URL is required
              </p>
            )}
          </div>
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Product Description"
            className="w-full p-2 border border-black rounded-md"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm font-light">
              Description is required
            </p>
          )}
        </div>
        <div className="my-8">
          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
