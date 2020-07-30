import React from "react";
import { VideoCardContainer } from "../VideoCard/styles";

// import { connect } from "react-redux";
// import { setSelectedMovie } from "../../../../redux/selectedMovie/selectedMovie-action";

// import { withRouter } from "react-router";

function CastCard({ name, character, img }) {
  //   let time;
  const image = `https://image.tmdb.org/t/p/w200/${img}`;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>{name}</h3>
        <h4>{character}</h4>
      </div>
      <VideoCardContainer url={image} />
    </>
  );
}

export default CastCard;
// <>
// <p style={{ "text-align": "center" }}>{genresString}</p>
// <VideoCardContainer
//   onMouseEnter={() => {
//     time = setTimeout(() => {
//       console.log("change");
//       setSelectedMovie(id);
//       history.push("./details");
//     }, 4000);
//   }}
//   onMouseLeave={() => {
//     clearTimeout(time);
//   }}
//   onClick={() => {
//     setSelectedMovie(id);
//     history.push("./details");
//   }}
//   url={image}
//   target="_blank"
//   style={{ borderColor: categoryColor || "red" }}
//   title={videoTitle}
//   genres={genres}
// />
// </>
