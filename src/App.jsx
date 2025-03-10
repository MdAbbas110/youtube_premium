import { Provider } from "react-redux";

import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
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
