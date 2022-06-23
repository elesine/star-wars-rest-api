import { useEffect, useState } from "react";
import callApi from "../CallApi";

function VehicleItem({ urlVehicle }) {
  const [vehicle, setVehicle] = useState("");

  useEffect(() => {
    callApi(urlVehicle, setVehicle);
  }, [urlVehicle]);

  return <div>{vehicle.name}</div>;
}

export default VehicleItem;
