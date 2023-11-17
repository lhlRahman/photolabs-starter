import React from 'react';
import '../styles/SearchBar.scss';

const SearchBar = (props) => {
  const { setSearchTerm } = props;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for searching */}
      <input type="search" placeholder="Search..." className="search-bar__box" onChange={(e) => setSearchTerm(e.target.value)}/>
    </form>
  );
};

export default SearchBar;