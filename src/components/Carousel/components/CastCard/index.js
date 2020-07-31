import React from 'react';
import { VideoCardContainer } from '../VideoCard/styles';

import { setSelectedActor } from '../../../../redux/selectedActor/selectedActor-action';

import { withRouter } from 'react-router';
import { setSelectedMovie } from '../../../../redux/selectedMovie/selectedMovie-action';

import { connect } from 'react-redux';
// import { setSelectedMovie } from "../../../../redux/selectedMovie/selectedMovie-action";

// import { withRouter } from "react-router";

const CastCard = ({ id, name, character, img, history, setSelectedActor }) => {
  //   let time;
  const image = `https://image.tmdb.org/t/p/w200/${img}`;
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h3>{name}</h3>
        <h4>{character}</h4>
      </div>
      <VideoCardContainer
        onClick={() => {
          //change the page, save the id to use in the page s
          // same as movies
          setSelectedActor(id);
          history.push('/actor');
        }}
        url={image}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedActor: (selectedActor) =>
    dispatch(setSelectedActor(selectedActor)),
});

const CastCardWithRouter = withRouter(CastCard);

export default connect(null, mapDispatchToProps)(CastCardWithRouter);
