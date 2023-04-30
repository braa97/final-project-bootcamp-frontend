import React, { useState, useEffect } from 'react'
import ApiManager from '../../apiManager/apiManager'
import LoadingWheel from '../LoadingWheel/LoadingWheel'
import ResidentsTable from '../ApartmentInfo/ResidentsTable/ResidentsTable'
import './Residents.css'

const Residents = ({ coordinatorApartments }) => {
    const [residents, setResidents] = useState([])
    const [loading, setLoading] = useState(true)
    const instructorId = JSON.parse(localStorage.getItem('user'))?.userId

    useEffect(() => {
        const apiManager = new ApiManager()

        let fetchInstructorResidents = async () => {
            let apartments = await apiManager.getResidentsByInstructorId(
                instructorId
            )
            setResidents(apartments)
            setLoading(false)
        }
        if (localStorage.getItem('user')) {
            fetchInstructorResidents()
        } else {
            setLoading(false)
            setResidents(coordinatorApartments)
        }
    }, [coordinatorApartments, instructorId])
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
