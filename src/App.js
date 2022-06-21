import "./App.css";
import Header from "./components/Header.js";
import PersonList from "./components/PersonList.js";
import PersonInfo from "./components/PersonInfo.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <PersonList/>
        <PersonInfo/>
      </div>
    </div>
  );
}

export default App;
