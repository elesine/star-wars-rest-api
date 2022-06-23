import "../styles/PersonItem.css";
import { AiOutlineRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import callApi from "../CallApi.js";

function PersonItem({ person, setSelectedPerson }) {
  const [planet, setPlanet] = useState("");
  const [specie, setSpecie] = useState("");

  useEffect(() => {
    if (person.homeworld !== undefined)
      callApi(person.homeworld, setPlanet);
  }, [person]);

  useEffect(() => {
    if (person.species !== undefined)
      callApi(person.species, setSpecie);
  }, [person]);

  return (
    <div className="box-item" onClick={() => setSelectedPerson(person)}>
      <div className="text">
        <div className="title">{person.name}</div>
        <div className="sub-title">
          {specie ? specie.name : null} from {planet ? planet.name : null}
        </div>
      </div>
      <AiOutlineRight className="arrow" />
    </div>
  );
}

export default PersonItem;
