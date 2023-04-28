import './Apartments.css'
import React, { useEffect, useState } from 'react'
import ApiManager from '../../apiManager/apiManager'
import LoadingWheel from '../LoadingWheel/LoadingWheel'
import ApartmentsTable from '../ApartmentsTable/ApartmentsTable'
// import { useLocation } from "react-router-dom";

const Apartments = ({ coordinatorApartments }) => {
    // const location = useLocation();
    const [apartments, setApartments] = useState([])
    const [loading, setLoading] = useState(true)
    // const [instructorId, setInstructorId] = useState(
    //     localStorage.getItem('instructorId')
    // )
    const instructorId = localStorage.getItem('instructorId')
    useEffect(() => {
        const apiManager = new ApiManager()

        let fetchApartments = async () => {
            let apartments = await apiManager.getApartmentsByInstructorId(
                instructorId
            )
            setApartments(apartments)
            setLoading(false)
        }
        if (localStorage.getItem('instructorId')) {
            fetchApartments()
        } else {
            setLoading(false)
            setApartments(coordinatorApartments)
        }
    }, [coordinatorApartments, instructorId])

    try {
        return (
            <>
                <div className='apartments-header-label'>
                    <label>
                        {apartments.length !== 0 ? 'Apartments' : null}
                    </label>
                </div>
                <div className='loading-wheel'>
                    {loading ? <LoadingWheel /> : null}
                </div>
                <ApartmentsTable apartments={apartments} />
                <div className='apartments-container'></div>
            </>
        )
    } catch (error) {
        console.log(error)
    }
}

export default Apartments
