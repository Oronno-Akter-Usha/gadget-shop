import { TbFilter } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = () => {
  return (
    <div className="bg-gray-100 h-full min-h-screen p-4 rounded-t-md">
      <div className="flex items-center gap-1">
        <TbFilter size={24} />
        <h2 className="text-xl font-semibold ">Filters</h2>
      </div>
      <div className="mt-8 flex flex-col gap-2 items-center">
        <div className="w-full">
          <select className="p-[11px] w-full border border-black rounded-md">
            <option disabled selected>
              Brand
            </option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
        <div className="w-full">
          <select className="p-[11px] w-full border border-black rounded-md">
            <option disabled selected>
              Category
            </option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
      </div>
      <button className="btn mt-4 w-full btn-primary">
        <GrPowerReset size={20} />
        Reset
      </button>
    </div>
  );
};

export default FilterBar;
