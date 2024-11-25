/* eslint-disable react/prop-types */
const SortByPrice = ({ setSort }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={(e) => {
        setSort(e.target.value);
      }}
    >
      <option disabled selected>
        price
      </option>
      <option value="asc">Low to high</option>
      <option value="desc">High to low</option>
    </select>
  );
};

export default SortByPrice;
