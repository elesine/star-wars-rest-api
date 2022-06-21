import "../styles/PersonInfo.css";

function PersonInfo({selectedPerson}) {

  const vehicles=selectedPerson.vehicles;
  return (
    <div className="info-container">
      <div className="title-info">General Information</div>
      <div className="row">
        <div className="feature">Eye Color</div>
        <div className="data">{selectedPerson.eye_color}</div>
        {console.log(selectedPerson)}

      </div>
      <div className="row">
        <div className="feature">Hair Color</div>
        <div className="data">{selectedPerson.hair_color}</div>
      </div>
      <div className="row">
        <div className="feature">Skin Color</div>
        <div className="data">{selectedPerson.skin_color}</div>
      </div>
      <div className="row">
        <div className="feature">Birth Year</div>
        <div className="data">{selectedPerson.birth_year}</div>
      </div>
      {/* TO DO: add vehicles  */}
      <div className="title-info">Vehicles</div>

      <div className="row">
        <div className="feature">Imperial Speeder Bike</div>
      </div>


      { vehicles? vehicles.map( (vehicle) =>  
        <div className="row">
            <div className="feature">{vehicle}</div>
        </div> ) : null
      }

    </div>
  );
}

export default PersonInfo;
