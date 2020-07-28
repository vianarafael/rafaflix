import React from "react";
import { VideoCardGroupContainer, VideoCardList, Title } from "./styles";
import VideoCard from "./components/VideoCard";

function VideoCardGroup({ color, title, films }) {
  const categoryTitle = title;
  const categoryColor = color;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        // <>
        <Title style={{ backgroundColor: categoryColor || "red" }}>
          {categoryTitle}
        </Title>
      )}
      <VideoCardList>
        {console.log(films)}
        {films
          ? films.map((film) => (
              <li key={film.original_title}>
                <VideoCard
                  id={film.id}
                  videoTitle={film.original_title}
                  videoURL={null}
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
