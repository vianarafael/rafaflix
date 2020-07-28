import React, { useState, useEffect } from "react";
import { VideoCardGroupContainer, VideoCardList, Title } from "./styles";
import VideoCard from "./components/VideoCard";

function VideoCardGroup({ color, title, films }) {
  const categoryTitle = title;
  const categoryColor = color;
  const [genres, setGenres] = useState([]);
  // hacky - removing the film that has no videos
  if (films) {
    films = films.filter((film) => film.id !== 19404);
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e576111d75dee905a12167d6f1387f71&language=en-US"
    )
      .then((res) => res.json())
      .then((res) => setGenres(res.genres));
  }, [setGenres]);

  const genreConverter = {};
  if (genres) {
    genres.forEach((genre) => {
      genreConverter[genre.id] = genre.name;
    });
  }

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        // <>
        <Title style={{ backgroundColor: categoryColor || "red" }}>
          {categoryTitle}
        </Title>
      )}
      <VideoCardList>
        {films
          ? films.map((film) => (
              <li key={film.original_title}>
                <VideoCard
                  id={film.id}
                  videoTitle={film.original_title}
                  genres={film.genre_ids.map(
                    (genre_id) => genreConverter[genre_id]
                  )}
                  poster={film.poster_path}
                  categoryColor={categoryColor}
                />
              </li>
            ))
          : ""}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;

// {videos.map((video, index) => {
//   if (ignoreFirstVideo && index === 0) {
//     return null;
//   }

//   return (
//     <li key={video.titulo}>
//       <VideoCard
//         videoTitle={video.titulo}
//         videoURL={video.url}
//         categoryColor={categoryColor}
//       />
//     </li>
//   );
// })}
