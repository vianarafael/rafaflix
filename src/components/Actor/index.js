import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import selectedActorReducer from '../../redux/selectedActor/selectedActor.reducer';

const Actor = ({ selectedActor }) => {
  const [actor, setActor] = useState('');
  const id = selectedActor.selectedActor;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=e576111d75dee905a12167d6f1387f71&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setActor(res));
  });

  return (
    <>
      <h1>{actor.name}</h1>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedActor: state.selectedActor,
});

export default connect(mapStateToProps)(Actor);
