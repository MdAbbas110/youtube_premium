const GOOGLE_API_KEY = "AIzaSyDmN-Eyw7TvKV4LiH4ax2A689GMJIZvE0o";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=zoo&type=video&key=${GOOGLE_API_KEY}`;
