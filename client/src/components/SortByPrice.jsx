const SortByPrice = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        price
      </option>
      <option value="asc">Low to high</option>
      <option value="desc">High to low</option>
    </select>
  );
};

export default SortByPrice;
