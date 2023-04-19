import React from 'react'
import './MedicalAppointments.css'

const MedicalAppointments = ({ medicalAppointments }) => {
    return (
        <>
            <div className='appointments'>
                <div className='card-header'>
                    <h3>Medical Appointments</h3>
                    <button>
                        See All
                        <span className='las la-arrow-right'></span>
                    </button>
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
                                {medicalAppointments.map((ma, i) => (<tr key={i}>
                                    <td>{ma.typeOfInspection}</td>
                                    <td>{ma.date}</td>
                                    <td>{ma.time}</td>
                                    <td>
                                        <span className={`status ${ma.attended? 'green': 'red'}`}></span>
                                        {ma.attended? 'Attended': 'Not Attended'}
                                    </td>
                                    <td>
                                      <button className='action-btn edit'>Edit</button>
                                      <button className='action-btn delete'>Delete</button>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MedicalAppointments
