import React, { useEffect, useState } from 'react'
import InfoWidget from '../InfoWidget/InfoWidget'
import ApartmentsList from '../ApartmentsList/ApartmentsList'
import InstructorList from '../InstructorsList/InstructorsList'
import ProfileCard from '../ProfileCard/ProfileCard'
import './CoordinatorProfile.css'
import { useParams } from 'react-router'
import ApiManager from '../../../apiManager/apiManager'

const CoordinatorProfile = () => {
    const { coordinatorID } = useParams()
    const [instructors, setInstructors] = useState([])
    const [coordinator, setCoordinator] = useState([])
    const apiManager = new ApiManager()

    useEffect(() => {
        fetchInstructorsData()
    }, [coordinatorID, coordinator])

    const fetchInstructorsData = async () => {
        let response = await apiManager.getCoordinatorDataByCoordinatorID(
            coordinatorID
        )
        setInstructors(response.instructors)
        setCoordinator(response)
    }

    const getApartmentsNum = () => {
        let numApart = 0
        for (let instructor of instructors) {
            numApart += instructor.apartments.length
        }
        return numApart
    }

    return (
        <>
            <div className='coord main'>
                <ProfileCard
                    img={coordinator.image}
                    name={coordinator.fullName}
                    IDNmber={coordinator.id}
                    phoneNumber={coordinator.phoneNumber}
                    email={coordinator.email}
                />
                <div className='coord cards'>
                    <InfoWidget
                        value={instructors.length}
                        title='Number Of Instructors'
                        icon='las la-clipboard-list'
                    />
                    <InfoWidget
                        value={getApartmentsNum()}
                        title='Number Of Apartments'
                        icon='las la-clipboard-list'
                    />
                </div>
                <div className='coord recent-grid'>
                    <ApartmentsList instructors={instructors} />
                    <InstructorList instructors={instructors} />
                </div>
            </div>
        </>
    )
}

export default CoordinatorProfile
