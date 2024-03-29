import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../services/api'
import './details.scss';

import BannerMain from '../BannerMain';
import Button from '../Button/button.component'
import { connect } from 'react-redux';

import Slider, { SliderItem } from '../Carousel/components/Slider';
import CastCard from '../Carousel/components/CastCard';

import Loading from '../../assets/loading.gif';

const Details = ({ selectedMovie }) => {
  const [details, setDetails] = useState(null);
  const id = selectedMovie.selectedMovie;

  const [message, setMessage] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&append_to_response=videos,credits`
    )
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, []);

  return (
    <>
      <div>
        {details ? (
          <div>
            <BannerMain
              videoTitle={details.title}
              url={details.videos.results[0]['key']}
              videoDescription={details.overview}
            />
            <div
              style={{
                textAlign: 'center',
                fontSize: '3rem',
                cursor: 'pointer',
              }}
            >
                <Button
                onClick={() => {
                  // check if logged in
                  if (localStorage.user) {
                    // if logged - add film to DB
                    
                    const user = JSON.parse(localStorage.user)
                    api
                      .post(
                        '/movie',
                        {
                             user_id: user.id,
                             movie_id: id
                        }, {
                          headers: {
                            authorization: `Bearer ${user.token}`
                          }
                      })
                      .then((res) => {
                        console.log('res', res)
                        setMessage('The movie was added to the Watch List');
                      })
                      .catch((err) => console.log(err));
                  } else {
                    setMessage('you must be logged in');
                  }
                }}
              >Add Movie to Watch List</Button>
              <h6 className="msg">{message || <span>&nbsp;&nbsp;</span>}</h6>
            </div>
            <h1 style={{ textAlign: 'center' }}>Cast</h1>
            <Slider>
              {details.credits.cast.map((actor) => {
                return (
                  <SliderItem key={actor.cast_id}>
                    <CastCard
                      id={actor.id}
                      name={actor.name}
                      character={actor.character}
                      img={actor.profile_path}
                    />
                  </SliderItem>
                );
              })}
            </Slider>
          </div>
        ) : (
          <img src={Loading} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(Details);
