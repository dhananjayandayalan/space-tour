//* Dependancies
import { useState } from "react";
import data from "./data.json";

//* Styles
import "./globals.scss";

//* View
import { Home, Destination, Crew, Technology } from "./pages";

//* Components
import { Navbar } from "./components";

const App = () => {
  const [route, setRoute] = useState("");

  const routeHandler = (value) => {
    setRoute(value);
  };

  return (
    <main className='app'>
      <Navbar handleRoute={routeHandler} route={route} />
      {route === "" && <Home />}
      {/* {route === "destination" && <Destination data={data.destinations} />} */}
      {/* {route === "crew" && <Crew data={data.crew} />} */}
      {/* {route === "technology" && <Technology data={data.technology} />} */}
    </main>
  );
};

export default App;
