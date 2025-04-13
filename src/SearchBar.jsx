const SearchBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search expense,description or category"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
  
  export default SearchBar;
  