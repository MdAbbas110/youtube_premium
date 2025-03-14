import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { Menu, SearchSlash, User, Youtube } from "lucide-react";
import { useSearchVideos } from "../hooks/useSearchVideos";
import { GOOGLE_API_KEY } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        searchQuery !== "" && getSearchSuggestions();
      }
      getSearchSuggestions();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CAll -" + searchQuery);

    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setSuggestion(json.items || []);

      // update the fresh api result in cache
      dispatch(
        cacheResults({
          [searchCache]: json.items[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      setSuggestion([]);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col  p-5 m-2 shadow-lg">
      <div className="flex col-span-1 items-center cursor-pointer ">
        <Menu onClick={() => toggleMenuHandler()} className="size-7" />
        <span className="flex items-center mx-2">
          <Youtube className="size-8" color="red" />
          <p className="text-lg ml-1 font-semibold">Premium</p>
        </span>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 border border-gray-400 rounded-l-full p-2 "
            placeholder="Search"
            type="text"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="rounded-r-full border px-5 py-2 bg-gray-100 border-gray-400">
            🔍
          </button>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white w-[36%] py-2 px-5 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion &&
                suggestion.map((s) => (
                  <li
                    key={s.id.videoId}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  >
                    🔍 {s.snippet.title.slice(0, 15) + "..."}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end ">
        <User className="size-8" />
      </div>
    </div>
  );
};

export default Head;
