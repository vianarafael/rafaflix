import React, { useState, useEffect } from "react";

import BannerMain from "../BannerMain";

import { connect } from "react-redux";

const Details = ({ selectedMovie }) => {
  const [details, setDetails] = useState(null);
  const id = selectedMovie.selectedMovie;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e576111d75dee905a12167d6f1387f71&append_to_response=videos`
    )
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, []);
  console.log(details);
  return (
    <div>
      {details ? (
        <BannerMain
          videoTitle={details.title}
          url={details.videos.results[0]["key"]}
          videoDescription={details.overview}
        />
      ) : (
        <h1>An error occured</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(Details);
