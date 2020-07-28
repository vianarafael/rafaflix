import React from "react";
import { VideoCardContainer } from "./styles";

import { connect } from "react-redux";
import { setSelectedMovie } from "../../../../redux/selectedMovie/selectedMovie-action";

import { withRouter } from "react-router";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({
  videoTitle,
  categoryColor,
  poster,
  id,
  setSelectedMovie,
  history,
}) {
  // const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const image = `https://image.tmdb.org/t/p/w200/${poster}`;
  return (
    <VideoCardContainer
      onClick={() => {
        setSelectedMovie(id);
        history.push("./details");
      }}
      url={image}
      target="_blank"
      style={{ borderColor: categoryColor || "red" }}
      title={videoTitle}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedMovie: (selectedMovie) =>
    dispatch(setSelectedMovie(selectedMovie)),
});

const VideoCardWithRouter = withRouter(VideoCard);

export default connect(null, mapDispatchToProps)(VideoCardWithRouter);
