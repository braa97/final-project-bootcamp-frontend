import './UpdateAppointmentAttend.css'
import ApiManager from '../../apiManager/apiManager'


const UpdateAppointmentAttend = ({medicalAppointmentID}) => {
    let apiManager = new ApiManager()

  return (
    apiManager.UpdateAppointmentAttend(medicalAppointmentID)
  )
}

export default UpdateAppointmentAttend