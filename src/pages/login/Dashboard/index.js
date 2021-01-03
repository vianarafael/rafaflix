import React, { useState, useEffect } from 'react';

import VideoCard from '../../../components/Carousel/components/VideoCard';
import Slider, {
  SliderItem,
} from '../../../components/Carousel/components/Slider';

const Dashboard = ({ user }) => {
  const [films, setFilms] = useState([]);
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
        setFilms(values);
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
      <Slider noRepeat>
        {films
          ? films.map((film) => (
              <SliderItem key={film.original_title}>
                <VideoCard
                  id={film.id}
                  videoTitle={film.original_title}
                  // genres={film.genre_ids.map(
                  //   (genre_id) => genreConverter[genre_id]
                  // )}
                  poster={film.poster_path}
                  // categoryColor={categoryColor}
                />
              </SliderItem>
            ))
          : ''}
      </Slider>
    </>
  );
};

export default Dashboard;
