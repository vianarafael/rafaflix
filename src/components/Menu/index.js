import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './menu.style.css';
import { Link } from 'react-router-dom';
import Button from '../Button/button.component';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { setSearchedFilm } from '../../redux/searched-film/searched-film.action';
import { logUser } from '../../redux/logged-user/logged-user.reducer';
import { setLogUser } from '../../redux/logged-user/logged-user.action';

import { withRouter } from 'react-router';
import { auth } from '../../firebase/firebase.utils';

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

const Menu = ({ setSearchedFilm, setLogUser, history, logUser }) => {
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
            history.push('/');
          }}
        >
          <i className="fas fa-search"></i>
        </Button>
        <Search
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {logUser.user ? (
        <Button onClick={() => setLogUser(null)}>SIGN OUT</Button>
      ) : (
        <Button as={Link} className="ButtonLink" to="/signin">
          SIGN IN
        </Button>
      )}
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchedFilm: (searchedFilm) => dispatch(setSearchedFilm(searchedFilm)),
  setLogUser: (loggedUser) => dispatch(setLogUser(loggedUser)),
});

const mapStateToProps = (state) => ({
  logUser: state.logUser,
});

const MenuWithRouter = withRouter(Menu);

export default connect(mapStateToProps, mapDispatchToProps)(MenuWithRouter);
