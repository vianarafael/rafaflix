import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import selectedActorReducer from '../../redux/selectedActor/selectedActor.reducer';
import { VideoCardContainer } from '../Carousel/components/VideoCard/styles';

import './styles.css';

const Actor = ({ selectedActor }) => {
  const [actor, setActor] = useState('');
  const id = selectedActor.selectedActor;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setActor(res));
  });
  const image = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
  return (
    <>
      <div className="actor-container">
        <h1>{actor.name}</h1>
        <VideoCardContainer className="actor-img" url={image} />
        <p>{actor.biography}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedActor: state.selectedActor,
});

export default connect(mapStateToProps)(Actor);
