import './ResidentDetails.css'

const ResidentDetails = ({residentData}) => {
  return (
    <div className='details-container'>
        <div> Name: {residentData.firstName + residentData.lastName }</div>
        <div> BirthDate: {residentData.dateOfBirth}</div>
        <div> Gender: {residentData.gender}</div>
        <div> Personal Budget: {residentData.budget}</div>
        <div>Allergies: {residentData.allergies.map(allergy => <span>{allergy+' '}</span>)}</div>
    </div>
   
  )
}

export default ResidentDetails;
