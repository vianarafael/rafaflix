import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Menu from "./components/Menu/menu.components";
import Home from "./components/Home";
import Details from "./components/Details";
import Footer from "./components/Footer";

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
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
