import "./ResidentDetails.css";
import Utility from "../../utilities/utility/util";

const ResidentDetails = ({ resident }) => {
  const utility = Utility();

  return (
    <div className="resident-info">
      <div className="resident-name">
        {resident.firstName} {resident.lastName} ({resident.residentId})
      </div>
      <div className="resident-details">
        {resident.gender}, {utility.dateFormatter(resident.dateOfBirth)}
      </div>
      <div className="resident-budget">Budget: {resident.budget} ₪</div>
    </div>
  );
};

export default ResidentDetails;
