import "../styles/PersonItem.css";
import { AiOutlineRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

function PersonItem( {person, setSelectedPerson} ) {
  const [planet, setPlanet] = useState("");
  const [specie, setSpecie] = useState("");

  const callApi = async (url, callback) => {
    if(url){
      try {
        const response = await axios.get(url);
        if (response.status === 200) callback(response.data.name); 
      } catch (error) {
        console.log("Error Endpoint: ", url);
        console.log(error);
        alert("Error PersonItem", error.status);
      }
    }
  }

  useEffect(() => {
    callApi(person.homeworld, setPlanet);
  }, [person]);

  useEffect( () => {
    callApi(person.species[0], setSpecie);
  }, [person]);


  return (
    <div className="box-item" onClick={() => setSelectedPerson(person)}>
      <div className="text">
        <div className="title">{person.name}</div>
        <div className="sub-title">{specie? specie: null} from {planet? planet: null}</div>
      </div>
      <AiOutlineRight className="arrow" />
    </div>
  );
}

export default PersonItem;
