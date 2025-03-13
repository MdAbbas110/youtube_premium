import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

export const useSearchVideos = (query) => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!query) {
      setSearchResult([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const data = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${GOOGLE_API_KEY}`
        );
        const json = await data.json();
        setSearchResult(json.items);
        console.log("Api call -", query);
      } catch (error) {
        console.log("error while searching result", error);
      }
    };

    const timer = setTimeout(() => fetchSearchResults(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return searchResult;
};
