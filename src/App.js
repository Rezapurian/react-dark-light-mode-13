import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Switch from "react-switch";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" id={theme}>
      <Form />
      <div className="switch">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <Switch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </div>
  );
}

export default App;
