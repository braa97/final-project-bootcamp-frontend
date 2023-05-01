import React, { useEffect, useState } from 'react'
import './MedicalAppointments.css'
import AddMedicalAppointment from '../../Add_Appointment/AddMedicalAppointment'
import ApiManager from '../../../apiManager/apiManager'
import SingleMedicalAppointment from '../SingleMedicalAppointment/SingleMedicalAppointment'

const MedicalAppointments = ({ residentId }) => {
    const apiManager = new ApiManager()
    const [medicalAppointments, setMedicalAppointments] = useState([])

    const fetchResidentAppointment = async () => {
        let response = await apiManager.getResidentMedicalAppointments(
            residentId
        )
        setMedicalAppointments(response.medicalAppointments)
    }

    useEffect(() => {
        fetchResidentAppointment()
    }, [])

    const handleAddAppointment = async (typeOfInspection, date) => {
        const newMedicalAppointment = {
            typeOfInspection: typeOfInspection,
            date: date,
            attended: false,
        }
        await apiManager.addMedicalAppointment(
            residentId,
            newMedicalAppointment
        )
        fetchResidentAppointment()
    }

    const handleDeleteAppointment = async (appointmentId) => {
        await apiManager.deleteAppointment(appointmentId, residentId)
        fetchResidentAppointment()
    }

    const handleAttendClick = (ma) => {
        const apiManager = new ApiManager()
        apiManager.updateAttendStatus(ma._id)
        let newMedicalAppointment = [...medicalAppointments]
        setMedicalAppointments(newMedicalAppointment)
    }

    try {
        return (
            <div className='appointments'>
                <div className='card-header'>
                    <h3>Medical Appointments</h3>
                    <AddMedicalAppointment
                        onClickEvent={handleAddAppointment}
                    />
                </div>
                <div className='card-body'>
                    <div className='table-responsive'>
                        <table width='100%'>
                            <thead>
                                <tr>
                                    <td>Title</td>
                                    <td>Date</td>
                                    <td>Time</td>
                                    <td>Attended</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {medicalAppointments.map((appointment) => (
                                    <SingleMedicalAppointment
                                        handleDeleteAppointment={
                                            handleDeleteAppointment
                                        }
                                        key={appointment._id}
                                        appointment={appointment}
                                        appointmentId={appointment._id}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

export default MedicalAppointments
