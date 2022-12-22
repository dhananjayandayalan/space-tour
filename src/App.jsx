//* Dependancies
import { useState, useEffect } from "react";

//* Styles
import "./globals.scss";

//* View
import { Destination, Crew, Technology } from "./pages";

//* Components
import { Navbar } from "./components";

const App = () => {
  const [data, setData] = useState({});
  const [route, setRoute] = useState("/");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setData(data);
  };

  return (
    <main className='app'>
      {/* <Navbar /> */}
      {/* <Destination data={state.destinations}/> */}
      {/* <Crew data={state.crew}/> */}
      {/* <Technology data={state.technology}/> */}
    </main>
  );
};

export default App;
