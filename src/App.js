import React, { useState } from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {

  const [moviesList, setMoviesList] = useState([]);
  const [searchText, setSearchText] = useState('');
  let filteredMoviesList = moviesList;

  const addNewMovie = (name, rating, duration) => {
      setMoviesList((moviesList) => [
          ...moviesList,
          {
              name,
              rating,
              duration
          }
      ])
  }

  if (searchText.length >= 2) {
    filteredMoviesList = moviesList.filter((movie) =>
        movie.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
  }

  const sortedMoviesList = filteredMoviesList.sort((a,b) => b.duration - a.duration);

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addNewMovie={addNewMovie}/>
        </div>
        <div className='layout-column w-30'>
          <Search searchText={searchText} setSearchText={setSearchText}/>
          { sortedMoviesList.length !== 0 && <Movieslist moviesList={sortedMoviesList}/> }
          { sortedMoviesList.length === 0 && moviesList.length !== 0 && (<div data-testid='noResult'>
              <h3 className='text-center'>No Results Found</h3>
          </div>) }
        </div>
      </div>
    </div>
  )
}

export default App;
