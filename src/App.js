import "./App.css";
import Start from "./components/Start";
import Game from "./components/Game";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Outlet />
      </Provider>
    </div>
  );
}

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/play", element: <Game /> },
    ],
  },
]);

export default App;
