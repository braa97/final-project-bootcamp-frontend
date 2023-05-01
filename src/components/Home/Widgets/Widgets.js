import React, { useEffect, useState } from 'react'
import ApiManager from '../../../apiManager/apiManager'
import './Widgets.css'
import {
    reedem,
    service,
    users,
    revenue,
    user,
    seeAllImg,
} from '../../../Assets/index'
import { Link, useNavigate } from 'react-router-dom'
import Utility from '../../../utilities/utility/util'
import CoordinatorApiMan from '../../../coordinatorApiManager/coordinatorApiMan'
const today = new Date()
const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0')

const Widgets = () => {
    const navigate = useNavigate()
    const [apartments, setApartments] = useState([])
    const [residents, setResidents] = useState([])
    const [totalMeetingsState, setTotalMeetings] = useState(0)
    const user = JSON.parse(localStorage.getItem('user'))
    const utility = new Utility()

    useEffect(() => {
        const apiManager = new ApiManager()
        const coordinatorApiMan = new CoordinatorApiMan()
        let apartments
        let fetchApartments = async () => {
            if (user?.userType === 'Instructor') {
                apartments = await apiManager.getApartmentsByInstructorId(
                    user?.userId
                )
            } else {
                apartments = await coordinatorApiMan.getCoordinatorApartments(
                    user?.userId
                ).data
            }
            setApartments(apartments)
        }

        let fetchResidents = async () => {
            let residents
            if (user?.userType === 'Instructor') {
                residents = await apiManager.getResidentsByInstructorId(
                    user?.userId
                )
            } else {
                residents = await coordinatorApiMan.getResidentsByCoordinatorId(
                    user?.userId
                )
                residents = residents.data
            }
            setResidents(residents)
        }

        let fetchInspections = async () => {
            if (user?.userType === 'Instructor') {
                let response = await apiManager.getInspections(user?.userId)
                const apartments = response.data.apartments
                let totalMeetings = 0
                for (let apartment of apartments) {
                    for (let apartmentResidents of apartment.residents) {
                        for (let meeting of apartmentResidents.medicalAppointments) {
                            let meetingMonth = utility
                                .dateFormatter(meeting.date)
                                .slice(3, 5)
                            if (
                                parseInt(meetingMonth) ===
                                parseInt(currentMonth)
                            ) {
                                totalMeetings += 1
                            }
                        }
                    }
                }
                setTotalMeetings(totalMeetings)
            }
        }

        fetchApartments()
        fetchResidents()
        if (user?.userType === 'Instructor') {
            fetchInspections()
        }
    }, [])

    const getTotalApartmentsBudget = () => {
        if (user?.userType === 'Instructor') {
            let totalBudget = 0
            for (let apartment of apartments) {
                totalBudget += apartment.budget
            }
            return (totalBudget / 1000).toFixed(1) + 'k'
        }
        return
    }

    const getCurrentMonthBirthdays = () => {
        const birthMonths = []
        for (let resident of residents) {
            birthMonths.push(
                utility.dateFormatter(resident.dateOfBirth).slice(3, 5)
            )
        }
        const upcomingBirthdays = birthMonths.filter((birthday) => {
            return (
                parseInt(birthday) >= parseInt(currentMonth) &&
                parseInt(birthday) <= parseInt(currentMonth)
            )
        })
        return upcomingBirthdays.length
    }

    return (
        <div className='home-widgets-container'>
            <div className='box box1'>
                <div>
                    <h3 className='card-value'>{getTotalApartmentsBudget()}</h3>
                    <div className='explanation'>Total Budget</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={revenue} alt='revenue' />
                </div>
            </div>
            <div className='box box2'>
                <div>
                    <h3 className='card-value'>Residents</h3>
                </div>
                <div className='avatars'>
                    {residents.slice(0, 3).map((resident, i) => {
                        return (
                            <img
                                key={i}
                                src={resident.image}
                                className='avatar'
                                alt='avatar'
                                onClick={() =>
                                    navigate(
                                        `apartments/apartment-info/resident/${resident._id}`
                                    )
                                }
                            />
                        )
                    })}
                    <img
                        src={seeAllImg}
                        className='avatar'
                        alt='all residents'
                        onClick={() => navigate(`residents`)}
                    />
                </div>
                <div className='icon-placeholder'>
                    <img src={users} alt='user' />
                </div>
            </div>
            <div className='box box3'>
                <div>
                    <h3 className='card-value'>Apartments</h3>
                </div>
                <div className='avatars'>
                    {apartments &&
                        apartments.slice(0, 2).map((apartment, i) => {
                            return (
                                <img
                                    key={i}
                                    src={apartment.image}
                                    className='avatar'
                                    alt='avatar'
                                    onClick={() =>
                                        navigate(
                                            `apartments/apartment-info/${apartment.apartmentName}`
                                        )
                                    }
                                />
                            )
                        })}
                    <img
                        src={seeAllImg}
                        className='avatar'
                        alt='all apartments'
                        onClick={() => navigate(`apartments`)}
                    />
                </div>
                <div className='icon-placeholder'>
                    <img src={reedem} alt='redeem' />
                </div>
            </div>
            <div
                className={`box ${
                    user?.userType === 'Instructor' ? 'box4' : 'box5'
                }`}
            >
                <div>
                    <h3 className='card-value'>{residents.length}</h3>
                    <div className='explanation'>Total Residents</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={users} alt='users' />
                </div>
            </div>
            {user?.userType === 'Instructor' ? (
                <>
                    <div className='box box5'>
                        <div>
                            <h3 className='card-value'>
                                {totalMeetingsState} Meetings
                            </h3>
                            <div className='explanation'>
                                This Month's Meetings
                            </div>
                        </div>
                        <div className='icon-placeholder'>
                            <img src={service} alt='service' />
                        </div>
                    </div>
                    <div className='box box6'>
                        <div>
                            <h3 className='card-value'>
                                {getCurrentMonthBirthdays()} Birthdays
                            </h3>
                            <div className='explanation'>
                                This Month's Birthdays
                            </div>
                        </div>
                        <div className='icon-placeholder'>
                            <img src={users} alt='service' />
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Widgets
