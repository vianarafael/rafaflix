import React, { useState, useEffect } from 'react';
import PageDefault from '../pageDefault';
import Carousel from '../Carousel';
import BannerMain from '../BannerMain';

import './home.styles.scss';

import { connect } from 'react-redux';

function Home({ searchedFilm }) {
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    console.log(process.env);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => setUpcoming(res.results));

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => setTopRated(res.results));

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => setPopular(res.results));

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => setNowPlaying(res.results));

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setGenres(res.results));
  }, [setNowPlaying, setPopular, setTopRated, setUpcoming, setGenres]);
  return (
    <>
      <div className="home-container" style={{ background: '#141414' }}>
        {searchedFilm.searchedFilm ? (
          <Carousel
            className
            color={'red'}
            title="Search Results"
            films={searchedFilm.searchedFilm.results}
            genre_ids={popular.genre_ids}
          />
        ) : (
          <BannerMain
            videoTitle="Composing Movement"
            url={'https://www.youtube.com/watch?v=doaQC-S8de8'}
            videoDescription={
              'Can movement tell a story? Sure, if you’re as gifted as Akira Kurosawa. More than any other filmmaker, he had an innate understanding of movement and how to capture it onscreen. Join me today in studying the master, possibly the greatest composer of motion in film history.'
            }
          />
        )}

        <Carousel ignoreFirstVideo />

        <Carousel
          color={'#00c86f'}
          title="Popular"
          films={popular}
          // genre_ids={popular.genre_ids}
        />

        <Carousel
          color={'#9cd33b'}
          title="Top Rated"
          films={topRated}
          // genre_ids={topRated.genre_ids}
        />

        <Carousel
          color={'orange'}
          title="Now Playing"
          films={nowPlaying}
          // genre_ids={nowPlaying.genre_ids}
        />

        <Carousel
          color={'red'}
          title="Upcoming"
          films={upcoming}
          // genre_ids={upcoming.genre_ids}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  searchedFilm: state.searchedFilm,
});

export default connect(mapStateToProps)(Home);
