import { useMemo, useState, useEffect } from "react";
//import LoadingCell from './LoadingCell.js';
import "../styles/PersonList.css";
import PersonItem from "./PersonItem.js";
import axios from "axios";

function PersonList({ setSelectedPerson }) {
  // const loadingCellRenderer = useMemo(() => {
  //     return LoadingCell;
  //   }, []);
  // const loadingCellRendererParams = useMemo(() => {
  //     return {
  //       loadingMessage: 'One moment please...',
  //     };
  // }, []);
  const [listPerson, setListPerson] = useState("");

  const callApi = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) setListPerson(response.data.results);
    } catch (error) {
      console.log("Error Endpoint: ", url);
      console.log(error);
      alert("Error List Person", error.status);
    }
  };

  useEffect(() => {
    callApi("https://swapi.dev/api/people/");
  },[]);

  return (
    <div className="list-container">
      {listPerson? (<PersonItem  person={listPerson[0]} setSelectedPerson={setSelectedPerson}/>) : null}
      {listPerson? (<PersonItem  person={listPerson[1]} setSelectedPerson={setSelectedPerson}/>) : null}
      {listPerson? (<PersonItem  person={listPerson[2]} setSelectedPerson={setSelectedPerson}/>) : null}
    </div>
  );
}

export default PersonList;
