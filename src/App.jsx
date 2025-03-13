import { Provider } from "react-redux";

import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { ErrorBoundary } from "react-error-boundary";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <ErrorBoundary fallback={"something went wrong"}>
          <Head />
        </ErrorBoundary>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
  /**
   * head
   * body
   * aside bar
   *   menu items
   * mainContainer
   *   button list
   *   video container
   *   video card
   */
}

export default App;
