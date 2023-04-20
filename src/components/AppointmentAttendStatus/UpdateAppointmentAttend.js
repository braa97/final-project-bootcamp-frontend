import './UpdateAppointmentAttend.css'
import ApiManager from '../../apiManager/apiManager'


const UpdateAppointmentAttend = ({residentId}) => {
    let apiManager = new ApiManager()

  return (
    apiManager.UpdateAppointmentAttend(residentId)
  )
}

export default UpdateAppointmentAttend