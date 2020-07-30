import React from "react";
import { VideoCardContainer } from "./styles";

import { connect } from "react-redux";
import { setSelectedMovie } from "../../../../redux/selectedMovie/selectedMovie-action";

import { withRouter } from "react-router";

function VideoCard({
  videoTitle,
  categoryColor,
  poster,
  id,
  setSelectedMovie,
  history,
  genres,
}) {
  let genresString = "";

  for (let i = 0; i < 2; i++) {
    genresString += genres[i];
    if (genres.length === 1) break;
    if (i < 1) {
      genresString += " | ";
    }
  }
  let time;
  const image = `https://image.tmdb.org/t/p/w200/${poster}`;
  return (
    <>
      <p style={{ "text-align": "center" }}>{genresString}</p>
      <VideoCardContainer
        onMouseEnter={() => {
          time = setTimeout(() => {
            console.log("change");
            setSelectedMovie(id);
            history.push("./details");
          }, 4000);
        }}
        onMouseLeave={() => {
          clearTimeout(time);
        }}
        onClick={() => {
          setSelectedMovie(id);
          history.push("./details");
        }}
        url={image}
        target="_blank"
        style={{ borderColor: categoryColor || "red" }}
        title={videoTitle}
        genres={genres}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedMovie: (selectedMovie) =>
    dispatch(setSelectedMovie(selectedMovie)),
});

const VideoCardWithRouter = withRouter(VideoCard);

export default connect(null, mapDispatchToProps)(VideoCardWithRouter);
