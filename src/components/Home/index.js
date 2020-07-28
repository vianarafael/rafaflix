import React, { useState, useEffect } from "react";

import Carousel from "../Carousel";
import BannerMain from "../BannerMain";

function Home() {
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setUpcoming(res.results));

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setTopRated(res.results));

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setPopular(res.results));

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=e576111d75dee905a12167d6f1387f71&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => setNowPlaying(res.results));

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e576111d75dee905a12167d6f1387f71&language=en-US"
    )
      .then((res) => res.json())
      .then((res) => setGenres(res.results));
  }, [setNowPlaying, setPopular, setTopRated, setUpcoming, setGenres]);
  return (
    <div style={{ background: "#141414" }}>
      <BannerMain
        videoTitle="Composing Movement"
        // url={dadosIniciais.categorias[0].videos[0].url}
        url={"https://www.youtube.com/watch?v=doaQC-S8de8"}
        videoDescription={
          "Can movement tell a story? Sure, if you’re as gifted as Akira Kurosawa. More than any other filmmaker, he had an innate understanding of movement and how to capture it onscreen. Join me today in studying the master, possibly the greatest composer of motion in film history."
        }
      />
      <Carousel ignoreFirstVideo />

      <Carousel
        color={"#00c86f"}
        title="Popular"
        films={popular}
        genre_ids={popular.genre_ids}
      />

      <Carousel
        color={"#9cd33b"}
        title="Top Rated"
        films={topRated}
        genre_ids={topRated.genre_ids}
      />

      <Carousel
        color={"orange"}
        title="Now Playing"
        films={nowPlaying}
        genre_ids={nowPlaying.genre_ids}
      />

      <Carousel
        color={"red"}
        title="Upcoming"
        films={upcoming}
        genre_ids={upcoming.genre_ids}
      />
    </div>
  );
}

export default Home;
