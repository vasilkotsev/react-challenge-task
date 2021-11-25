import React from "react";

const SearchBar = props => {
  return (
    <div className="input-group input-group-lg mt-5">
      <input className="form-control search-bar" {...props} type="text" />
    </div>
  );
};

export default SearchBar;
