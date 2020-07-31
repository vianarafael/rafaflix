import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './menu.style.css';
import { Link } from 'react-router-dom';
import Button from '../Button/button.component';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSearchedFilm } from '../../redux/searched-film/searched-film.action';

const Search = styled.input`
  color: var(--white);
  height: 3rem;
  border: 1px solid var(--white);
  box-sizing: border-box;
  margin-left: 4px;
  background: black;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  /* &:hover,
  &:focus {
    opacity: 0.5;
  } */
`;

const Menu = ({ setSearchedFilm }) => {
  const [query, setQuery] = useState('');

  const searchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((res) => setSearchedFilm(res));
  };
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Rafaflix logo" />
      </Link>
      <div className="searchbox">
        <Button
          onClick={() => {
            searchMovie();
            setQuery('');
          }}
        >
          <i class="fas fa-search"></i>
        </Button>
        <Search
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Button as={Link} className="ButtonLink" to="/videos">
        LOGIN
      </Button>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchedFilm: (searchedFilm) => dispatch(setSearchedFilm(searchedFilm)),
});

export default connect(null, mapDispatchToProps)(Menu);
