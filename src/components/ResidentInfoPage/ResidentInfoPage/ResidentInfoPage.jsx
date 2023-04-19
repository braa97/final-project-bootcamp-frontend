import React from 'react'
import InfoWidget from '../InfoWidget/InfoWidget'
import MedicalAppointments from '../MedicalAppointments/MedicalAppointments'
import RelativeContacts from '../RelativeContacts/RelativeContacts'
import './ResidentInfoPage.css'
import CDN from '../CDN'
import ProfileCard from '../ProfileCard/ProfileCard'
const LINE_AWESOME_CDN =
    'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'

const ResidentInfoPage = () => {
    const resident = {
        residentId: 'RES003',
        firstName: 'Ethan',
        lastName: 'Cohen',
        dateOfBirth: '1993-11-07',
        gender: 'Male',
        image: 'https://media.licdn.com/dms/image/C4D03AQGkBk7PbsXI5w/profile-displayphoto-shrink_800_800/0/1634674720491?e=2147483647&v=beta&t=xp-opkIF4wGDd7Cw8qOpf6zsGz1U3FepZhJKKY0LMD8',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4500,
        allergies: ['Milk', 'Tree Nuts'],
        medicalAppointments: [
            {
                attended: true,
                time: '16:30',
                typeOfInspection: 'Tonsillitis Diagnosis',
                date: '2022-04-27',
            },
            {
                attended: false,
                time: '10:00',
                typeOfInspection: 'Sleep Apnea Screening',
                date: '2023-04-30',
            },
        ],
        familyConnections: [
            {
                name: 'Daniel Levin',
                contactNumber: '053-9876543',
            },
            {
                name: 'Natalie Cohen',
                contactNumber: '056-3456789',
            },
        ],
        medications: {
            morning: [
                {
                    medicationName: 'Antacid',
                    dosage: '1 tablet',
                    status: false,
                },
            ],
            afternoon: [],
            evening: [
                {
                    medicationName: 'Probiotic',
                    dosage: '1 capsule',
                    status: false,
                },
            ],
        },
    }

    return (
        <>
            <CDN href={LINE_AWESOME_CDN} />
            <div className='main'>
                <ProfileCard
                    img={resident.image}
                    name={`${resident.firstName} ${resident.lastName}`}
                    address={resident.address.value}
                />
                <div className='cards'>
                    <InfoWidget
                        value={resident.dateOfBirth.slice(5)}
                        title='Birthday'
                        icon='las la-clipboard-list'
                    />
                    <InfoWidget
                        value={resident.allergies.join(', ')}
                        title='Allergies'
                        icon='las la-users'
                    />
                    <InfoWidget
                        value={resident.medicalAppointments.length}
                        title='Appointments'
                        icon='las la-users'
                    />
                    <InfoWidget
                        value={`₪${
                            resident.budget > 999
                                ? (resident.budget / 1000).toFixed(1) + 'k'
                                : resident.budget
                        }`}
                        title='Budget'
                        icon='lab la-google-wallet'
                    />
                </div>
                <div className='recent-grid'>
                    <MedicalAppointments
                        medicalAppointments={resident.medicalAppointments}
                    />
                    <RelativeContacts contacts={resident.familyConnections} />
                </div>
            </div>
        </>
    )
}

export default ResidentInfoPage
