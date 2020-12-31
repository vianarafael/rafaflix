import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ logUser }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    logUser.user.slice(1).forEach((movie) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=e576111d75dee905a12167d6f1387f71`
      )
        .then((res) => res.json())
        .then((data) => setMovies([...movies, data]));
    });
  }, []);

  return (
    <>
      <h1>{logUser.user ? `Welcome ${logUser.user[0].name}` : ''}</h1>
      <h2>Watch List</h2>
      <ul>
        {movies
          ? movies.map((movie) => (
              <li>
                <p>{movie.original_title}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                />
              </li>
            ))
          : ''}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  logUser: state.logUser,
});

export default connect(mapStateToProps)(Dashboard);
