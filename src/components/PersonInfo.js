import "../styles/PersonInfo.css";
import VehicleItem from "./VehicleItem";

function PersonInfo({ selectedPerson }) {
  const vehicles = selectedPerson.vehicles;

  return (
    <div className="info-container">
      <div className="title-info">General Information</div>
      <div className="row">
        <div className="feature">Eye Color</div>
        <div className="data">{selectedPerson.eye_color}</div>
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

      <div className="title-info">Vehicles</div>
      {vehicles
        ? vehicles.map((vehicle) => (
            <div key={`${vehicle}-row`} className="row feature">
              <VehicleItem urlVehicle={vehicle}></VehicleItem>
            </div>
          ))
        : null}
    </div>
  );
}

export default PersonInfo;
