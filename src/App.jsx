//* Dependancies
import { useState, useEffect } from "react";

//* Styles
import "./globals.scss";

//* View
import { Home, Destination, Crew, Technology } from "./pages";

//* Components
import { Navbar } from "./components";

const App = () => {
  const [data, setData] = useState({});
  const [route, setRoute] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setData(data);
  };

  const routeHandler = (value) => {
    setRoute(value);
  };

  return (
    <main className='app'>
      <Navbar handleRoute={routeHandler} route={route} />
      {route === "" && <Home />}
      {/* {route === "destination" && <Destination data={data.destinations} />}
      {route === "crew" && <Crew data={data.crew} />}
      {route === "technology" && <Technology data={data.technology} />} */}
    </main>
  );
};

export default App;
