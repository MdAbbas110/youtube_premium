import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useVideosList } from "../hooks/useVideosList";

const VideoContainer = () => {
  const videos = useVideosList();

  if (!videos) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap flex-flow ">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
