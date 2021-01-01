import React, { useState, useEffect } from 'react';

const Dashboard = ({ user }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      const values = await Promise.all(
        user
          .slice(1)
          .map((value) =>
            fetch(
              `https://api.themoviedb.org/3/movie/${value.movie_id}?api_key=e576111d75dee905a12167d6f1387f71`
            ).then((res) => res.json())
          )
      );
      if (!isCancelled) {
        setMovies(values);
      }
    }
    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <h1>{user ? `Welcome ${user[0].name}` : ''}</h1>
      <h2>Watch List</h2>
      <ul>
        {movies
          ? movies.map((movie) => (
              <li key={movie.movie_id}>
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

export default Dashboard;
