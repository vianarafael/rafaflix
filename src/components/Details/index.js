import React, { useState, useEffect } from "react";

import BannerMain from "../BannerMain";
import PageDefault from "../pageDefault";
import { connect } from "react-redux";

const Details = ({ selectedMovie }) => {
  const [details, setDetails] = useState(null);
  const id = selectedMovie.selectedMovie;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e576111d75dee905a12167d6f1387f71&append_to_response=videos,credits`
    )
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, []);
  console.log(details);
  return (
    <PageDefault>
      <div>
        {details ? (
          <div>
            <BannerMain
              videoTitle={details.title}
              url={details.videos.results[0]["key"]}
              videoDescription={details.overview}
            />
            <h1>Cast</h1>
            <ul>
              {details.credits.cast.map((actor) => {
                return (
                  <li>
                    {
                      actor.name
                      // , actor.character, actor.profile_path
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <h1>An error occured</h1>
        )}
      </div>
    </PageDefault>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(Details);
