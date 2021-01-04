import React, { useState, useEffect } from 'react';
import './style.scss';

import axios from 'axios';

import VideoCard from '../../../components/Carousel/components/VideoCard';
import Slider, {
  SliderItem,
} from '../../../components/Carousel/components/Slider';

const Dashboard = ({ user, handleSetUser }) => {
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
                  poster={film.poster_path}
                />
                <h4 className="remove-container">
                  <span
                    className="remove"
                    onClick={() => {
                      axios
                        .post('http://localhost:5000/users/watchlist/remove', {
                          user_id: user[0].id,
                          email: user[0].email,
                          password: user[0].password,
                          movie_id: film.id,
                        })
                        .then((res) => {
                          localStorage.setItem(
                            'user',
                            JSON.stringify(res.data)
                          );
                          setFilms(res.data);
                          handleSetUser(res.data);
                          // horrible hack - fix that ASAP
                          window.location.reload();
                        });
                    }}
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    {' Remove'}
                  </span>
                </h4>
              </SliderItem>
            ))
          : ''}
      </Slider>
    </>
  );
};

export default Dashboard;
