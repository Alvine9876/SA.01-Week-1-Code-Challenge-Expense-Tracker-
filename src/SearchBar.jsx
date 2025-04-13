const SearchBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
  
  export default SearchBar;
  