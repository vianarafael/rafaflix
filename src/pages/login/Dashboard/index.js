import React, { useState, useEffect } from 'react';
import './style.scss';

import axios from 'axios';

import VideoCard from '../../../components/Carousel/components/VideoCard';
import Slider, {
  SliderItem,
} from '../../../components/Carousel/components/Slider';
import api from '../../../services/api';
import { func } from 'prop-types';

const Dashboard = () => {
  const [films, setFilms] = useState([]);
  let user

  useEffect(() => {
    user = JSON.parse(localStorage.user);
    async function fetchData() {
      const movies = await api.get(`/movies/${user.id}`, {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      })
      const watchList = await Promise.all(movies.data.map(async ({ movie_id }) => {
  
        const result = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_KEY}`)
        return result.data
      }))
      setFilms(watchList)
    }
    fetchData()
  }, [films]);
 
  const removeFilm = async (e) => {
    const movie_id = e.target.id;
    const user_id = user.id;
    const result = await api
      .delete('/movie', {
        data: {
        user_id,
        movie_id
        },
        
        headers: {
        authorization: `Bearer ${user.token}`
      }
    }
    )
    // need to change the state - hacky
    setFilms()
  }
 

  return (
    <>
       <Slider noRepeat>
        {films ? films.map((film) => (
          < SliderItem key={ film.original_title } >
            <VideoCard
              id={film.id}
              videoTitle={film.original_title}
              poster={film.poster_path}
            />
             <h4 className="remove-container">
                  <span
                className="remove"
                    id={film.id}
                    onClick={removeFilm}
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    {' Remove'}
                  </span>
                </h4>
          </SliderItem>
          )
        ): null}
      </Slider> 
    </>
  );
};

export default Dashboard;

