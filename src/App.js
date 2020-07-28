import React, { useState, useEffect } from "react";

import Menu from "./components/Menu/menu.components";
import Carousel from "./components/Carousel";
import BannerMain from "./components/BannerMain";
import Footer from "./components/Footer";

import dadosIniciais from "../src/data/dados_iniciais.json";

function App() {
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

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
  }, [setNowPlaying, setPopular, setTopRated, setUpcoming]);

  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        // url={dadosIniciais.categorias[0].videos[0].url}
        url={"https://www.youtube.com/watch?v=doaQC-S8de8"}
        videoDescription={
          "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel
        category={dadosIniciais.categorias[1]}
        title="Popular"
        films={popular}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
        title="Top Rated"
        films={topRated}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
        title="Now Playing"
        films={nowPlaying}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
        title="Upcoming"
        films={upcoming}
      />

      <Footer />
    </div>
  );
}

export default App;
