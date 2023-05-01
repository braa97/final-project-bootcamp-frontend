import React, { useState, useEffect } from 'react'
import ApiManager from '../../apiManager/apiManager'
import CoordinatorApiMan from '../../coordinatorApiManager/coordinatorApiMan'
import LoadingWheel from '../LoadingWheel/LoadingWheel'
import ResidentsTable from '../ApartmentInfo/ResidentsTable/ResidentsTable'
import './Residents.css'

const Residents = () => {
    const [residents, setResidents] = useState([])
    const [loading, setLoading] = useState(true)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const apiManager = new ApiManager()
        const coordinatorApiMan = new CoordinatorApiMan()

        let fetchInstructorResidents = async () => {
            let response
            if (user?.userType === "Instructor") {
                response = await apiManager.getResidentsByInstructorId(user?.userId)
            }
            else {
                response = await coordinatorApiMan.getResidentsByCoordinatorId(user?.userId)
                response = response.data
            }
            setResidents(response)
            setLoading(false)
        }
        fetchInstructorResidents()
    }, [])
    try {
        return (
            <div className='instructor-residents-component'>
                <div className='residents-header-label'>
                    <label>{residents.length !== 0 ? 'Residents' : null}</label>
                </div>
                <div className='loading-wheel'>
                    {loading ? <LoadingWheel /> : null}
                </div>
                <ResidentsTable residents={residents} />
                <div className='residents-container'></div>
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

export default Residents
