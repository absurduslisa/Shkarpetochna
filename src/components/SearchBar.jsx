import React from 'react'


const SearchBar = () => {
  return (
    <div>
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
    </div>
  )
}

export default SearchBar