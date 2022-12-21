import { useState, useEffect } from "react";
import './App.scss';

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setState(data);
  };

  return <main className="app">
    Hello
  </main>;
};

export default App;
