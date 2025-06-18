# YouTube Premium Clone

This project is a YouTube Premium clone built with React and Vite. It showcases features like live chat, video listing, nested comments, search suggestions using the YouTube API, and state management with Redux Toolkit.

## Features

- **Fast Development:** Powered by [Vite](https://vitejs.dev/)
- **React Integration:** Using React with Fast Refresh via [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- **State Management:** Utilizing Redux Toolkit with custom slices ([`appSlice`](src/utils/appSlice.js), [`chatSlice`](src/utils/chatSlice.js), [`searchSlice`](src/utils/searchSlice.js))
- **Tailwind CSS:** Styled with Tailwind for rapid UI development
- **Live Chat & Comments:** Interactive components for live chat and threaded comments
- **API Integration:** Fetches videos and search suggestions from the YouTube API

## Project Structure

```
youtube_premium/
├── public/
│   ├── moon.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Body.jsx
│   │   ├── Button.jsx
│   │   ├── ButtonList.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── Comment.jsx
│   │   ├── CommentContainer.jsx
│   │   ├── CommentsList.jsx
│   │   ├── Demo.jsx
│   │   ├── Head.jsx
│   │   ├── LiveChat.jsx
│   │   ├── MainContainer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── VideoCard.jsx
│   │   ├── VideoContainer.jsx
│   │   └── WatchPage.jsx
│   ├── hooks/
│   │   ├── useLiveStream.jsx
│   │   ├── useSearchVideos.js
│   │   ├── useVideosList.js
│   │   └── useVoiceSearch.js
│   └── utils/
│       ├── appSlice.js
│       ├── chatSlice.js
│       ├── constants.js
│       ├── dataSet.js
│       ├── helper.js
│       ├── searchSlice.js
│       └── store.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── .gitignore
```

## Installation

1. **Clone the Repository:**

   ```sh
   git clone https://your.repo.url
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Setup Environment Variables:**

   Create an `.env` file in the root directory and add your YouTube API key:

   ```env
   VITE_GOOGLE_API_KEY=your_api_key_here
   ```

## Running the Project

- **Development Mode:**

  ```sh
  npm run dev
  ```

- **Production Build:**

  ```sh
  npm run build
  ```

- **Preview Production Build:**

  ```sh
  npm run preview
  ```

## Linting

Lint the project with ESLint:

```sh
npm run lint
```

## Configuration

- **Vite:** [vite.config.js](vite.config.js)
- **Tailwind CSS:** [tailwind.config.js](tailwind.config.js) & [postcss.config.js](postcss.config.js)
- **ESLint:** [eslint.config.js](eslint.config.js)

## Additional Notes

- The project leverages Redux Toolkit for state management and various custom hooks for handling API calls.
- Feel free to explore the components and utilities within the `src` folder to understand the project design.

## License

This project is licensed under the MIT License.
