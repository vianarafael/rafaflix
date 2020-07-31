import React, { useState, useEffect } from 'react';

import BannerMain from '../BannerMain';
import PageDefault from '../pageDefault';
import { connect } from 'react-redux';

import Slider, { SliderItem } from '../Carousel/components/Slider';
import CastCard from '../Carousel/components/CastCard';

import Loading from '../../assets/loading.gif';

const Details = ({ selectedMovie }) => {
  const [details, setDetails] = useState(null);
  const id = selectedMovie.selectedMovie;
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e576111d75dee905a12167d6f1387f71&append_to_response=videos,credits`
    )
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, []);
  console.log('aqui', details);
  return (
    <PageDefault>
      <div>
        {details ? (
          <div>
            <BannerMain
              videoTitle={details.title}
              url={details.videos.results[0]['key']}
              videoDescription={details.overview}
            />
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
                      // , actor.character, actor.profile_path
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
    </PageDefault>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(Details);
