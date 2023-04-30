import React, { useEffect, useState } from 'react'
import ApiManager from '../../../apiManager/apiManager'
import './Widgets.css'
import { reedem, service, users, revenue, user } from '../../../Assets/index'
import Utility from '../../../utilities/utility/util'
const today = new Date()
const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0')

const Widgets = ({ coordinatorApartments }) => {
    const [apartments, setApartments] = useState([])
    const [residents, setResidents] = useState([])
    const [totalMeetingsState, setTotalMeetings] = useState(0)
    const instructorId = localStorage.getItem('instructorId')
    const utility = new Utility()

    useEffect(() => {
        const apiManager = new ApiManager()
        let fetchApartments = async () => {
            let apartments = await apiManager.getApartmentsByInstructorId(
                instructorId
            )
            setApartments(apartments)
        }
        let fetchInstructorResidents = async () => {
            let apartments = await apiManager.getResidentsByInstructorId(
                instructorId
            )
            setResidents(apartments)
        }
        let fetchInspections = async () => {
            let response = await apiManager.getInspections(instructorId)
            const apartments = response.data.apartments
            let totalMeetings = 0
            for (let apartment of apartments) {
                for (let apartmentResidents of apartment.residents) {
                    for (let meeting of apartmentResidents.medicalAppointments) {
                        let meetingMonth = utility
                            .dateFormatter(meeting.date)
                            .slice(3, 5)
                        if (parseInt(meetingMonth) === parseInt(currentMonth)) {
                            totalMeetings += 1
                        }
                    }
                }
            }
            console.log('total meetings:', totalMeetings)
            setTotalMeetings(totalMeetings)
        }

        if (localStorage.getItem('instructorId')) {
            fetchInstructorResidents()
            fetchApartments()
            fetchInspections()
        } else {
            setApartments(coordinatorApartments)
            setResidents(coordinatorApartments)
        }
    }, [coordinatorApartments, instructorId])

    const getTotalApartmentsBudget = () => {
        let totalBudget = 0
        for (let apartment of apartments) {
            totalBudget += apartment.budget
        }
        return (totalBudget / 1000).toFixed(1) + 'k'
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
                    <h3>{getTotalApartmentsBudget()}</h3>
                    <div className='explanation'>Total Budget</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={revenue} alt='revenue' />
                </div>
            </div>
            <div className='box box2'>
                <div>
                    <h3>Residents</h3>
                    <div className='explanation'>Latest Residents</div>
                </div>
                <div className='avatars'>
                    <img
                        src='https://image.shutterstock.com/image-photo/confident-rich-eastern-indian-business-260nw-2200214153.jpg'
                        className='avatar'
                        alt='Avatar 1'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg'
                        className='avatar'
                        alt='Avatar 2'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/successful-caucasian-young-man-student-260nw-2141124049.jpg'
                        className='avatar'
                        alt='Avatar 3'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/portrait-smiling-mature-man-standing-260nw-2137527991.jpg'
                        className='avatar'
                        alt='Avatar 4'
                    />
                </div>
                <div className='icon-placeholder'>
                    <img src={user} alt='user' />
                </div>
            </div>
            <div className='box box3'>
                <div>
                    <h3>Apartments</h3>
                    <div className='explanation'>Latest Apartments</div>
                </div>
                <div className='avatars'>
                    <img
                        src='https://image.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg'
                        className='avatar'
                        alt='Apartment 1'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/eu-modern-european-complex-apartment-260nw-1445600369.jpg'
                        className='avatar'
                        alt='Apartment 2'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/cityscape-residential-area-modern-apartment-260nw-1723278520.jpg'
                        className='avatar'
                        alt='Apartment 3'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/stylish-apartment-interior-modern-kitchen-260nw-1097696003.jpg'
                        className='avatar'
                        alt='Apartment 4'
                    />
                </div>
                <div className='icon-placeholder'>
                    <img src={reedem} alt='redeem' />
                </div>
            </div>
            <div className='box box4'>
                <div>
                    <h3>{residents.length}</h3>
                    <div className='explanation'>Total Residents</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={users} alt='users' />
                </div>
            </div>
            <div className='box box5'>
                <div>
                    <h3>{totalMeetingsState} Meetings</h3>
                    <div className='explanation'>This Month's Meetings</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={service} alt='service' />
                </div>
            </div>
            <div className='box box6'>
                <div>
                    <h3>{getCurrentMonthBirthdays()} Birthdays</h3>
                    <div className='explanation'>This Month's Birthdays</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={users} alt='service' />
                </div>
            </div>
        </div>
    )
}

export default Widgets
