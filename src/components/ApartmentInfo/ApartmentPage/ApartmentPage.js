import React, { useEffect, useState } from 'react'
import ApartmentDetails from '../ApartmentDetails/ApartmentDetails'
import './ApartmentPage.css'
import ResidentsTable from '../ResidentsTable/ResidentsTable'
import ApiManager from '../../../apiManager/apiManager'
import { useParams } from 'react-router-dom'

const ApartmentPage = () => {
    const { apartmentName } = useParams()
    const [residents, setResidents] = useState([])
    const [apartment, setApartment] = useState({})

    useEffect(() => {
        const apiManager = new ApiManager()
        const fetchApartmentsAndResidents = async () => {
            const fetchedApartment = await apiManager.getApartmentByName(
                apartmentName
            )
            const fetchedResidents =
                await apiManager.getResidentsByApartmentName(apartmentName)
            try {
                setApartment(fetchedApartment)
                setResidents(fetchedResidents)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApartmentsAndResidents()
    }, [apartmentName])

    try {
        return (
            <>
                <ApartmentDetails apartment={apartment} />
                <ResidentsTable residents={residents} />
            </>
        )
    } catch (error) {
        console.log(error)
    }
}

export default ApartmentPage
