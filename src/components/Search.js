import React from 'react'

function Search({ searchText, setSearchText }) {

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </section>
  )
}

export default Search
