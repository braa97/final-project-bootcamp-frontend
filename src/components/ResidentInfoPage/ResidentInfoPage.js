import "./ResidentDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import ResidentDetails from '../ResidentDetails/ResidentDetails'


export default function ResidentInfoPage() {
    const { residentId } = useParams();
    const [resident, setResident] = useState([]);
  
    useEffect(() => {
      const apiManger = new ApiManager();
  
      const getResident = async() => {
        let tempResident = await apiManger.getResidentsByApartmentName(residentId);
        setResident(tempResident);
      };
      getResident();
    }, []);

  return (
    <div>ResidentInfoPage</div>
  )
}
