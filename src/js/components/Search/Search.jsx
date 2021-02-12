import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestTranslate } from '../../redux/actions-creator/translate/translate-actions-creator';
import { clearMovieList, searchMovieNextPage } from '../../redux/actions-creator/search-movie/search-movie-actions-creator';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const searchValueHandler = (event) => {
      setSearchValue(event.target.value);
    };

    const searchSubmitHandler = (event) => {
      event.preventDefault();
      setSearchValue('');
      dispatch(clearMovieList());
      dispatch(requestTranslate(searchValue));
    };

    return (
      <form
        className='search'
        onSubmit={searchSubmitHandler}
      >
        <input
          type='text' 
          className='search-field'
          placeholder={'please write the movie\'s title'}
          onChange={searchValueHandler}
        />
        <button
          className='search-button'
          type='submit'
        >
          Search
        </button>
      </form>
    )
}

export default Search;