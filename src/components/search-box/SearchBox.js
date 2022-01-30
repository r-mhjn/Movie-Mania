import React from "react";
import "./search-box.scss";

const SearchBox = ({ placeholder, onSearchChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
 