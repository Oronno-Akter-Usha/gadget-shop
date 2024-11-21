import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form>
      <div className="border border-black rounded-md flex items-center justify-between">
        <input
          type="text"
          placeholder="Search Product"
          name="search"
          className="p-2"
        />
        <button className="btn ">
          <IoSearchSharp size={20} />
        </button>
      </div>

      {/* <label className="input input-bordered flex items-center gap-2 my-7">
        <input type="text" className="grow" placeholder="Search" />
        <button className="">
          <IoSearchSharp size={20} />
        </button>
      </label> */}
    </form>
  );
};

export default SearchBar;
