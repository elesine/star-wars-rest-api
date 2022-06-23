import "./App.css";
import Header from "./components/Header.js";
import PersonList from "./components/PersonList.js";
import PersonInfo from "./components/PersonInfo.js";
import { useState } from "react";

function App() {
  const [selectedPerson, setSelectedPerson] = useState("");
  const firstUrl = "https://swapi.dev/api/people/";
  return (
    <div className="App">
      <Header />
      <div className="content">
        <PersonList url={firstUrl} setSelectedPerson={setSelectedPerson} />
        <PersonInfo selectedPerson={selectedPerson} />
      </div>
    </div>
  );
}

export default App;
