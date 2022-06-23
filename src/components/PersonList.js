//import LoadingCell from './LoadingCell.js';
import "../styles/PersonList.css";
import PersonItem from "./PersonItem.js";
import { useState, useEffect } from "react";
import callApi from "../CallApi";

function PersonList({ url, setSelectedPerson }) {
  const [listPerson, setListPerson] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    callApi(url, setListPerson);
    setLoading((isLoading) => false);
  }, [url]);

  if (isLoading) {
    return <div className="list-container loading"> Loading...</div>;
  }

  return (
    <div className="list-container">
      {listPerson
        ? listPerson.results.map((person, index) => (
            <PersonItem
              key={index}
              person={person}
              setSelectedPerson={setSelectedPerson}
            />
          ))
        : null}
      {/* <PersonList url={listPerson.next} setSelectedPerson={setSelectedPerson} />  */}
    </div>
  );
}
export default PersonList;
