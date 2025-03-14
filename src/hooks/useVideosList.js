import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

export const useVideosList = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEOS_API);
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.log("Error fetching videos", error);
      }
    };

    fetchVideos();
  }, []);
  return videos;
};
