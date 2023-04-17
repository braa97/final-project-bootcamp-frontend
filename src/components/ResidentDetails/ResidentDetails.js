import './ResidentDetails.css'
import Utility from '../../utilities/util'

const ResidentDetails = ({resident}) => {
  const utility = Utility()
  return (
    <div className='details-container'>
        <div> Name: {resident.firstName} {resident.lastName }</div>
        <div> ID: {resident.residentId}</div>
        <div> Gender: {resident.gender}</div>
        <div className='resident-info-field'> BirthDate: {utility.dateFormatter(resident.dateOfBirth)}</div>
        <div> Personal Budget: {resident.budget} ₪</div>
        {/* <div>Allergies: {resident.allergies.map(allergy => <span>{allergy +' '}</span>)}</div> */}
    </div>
  )
}

export default ResidentDetails;
