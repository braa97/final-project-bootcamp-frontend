import React from 'react'
import ApartmenPagetHeader from '../ApartmentPageHeader/ApartmentPageHeader'
import './ResidentsPage.css'
import { apartments } from '../../mock-data/apartments'
// import { RESIDENTS } from '../../mock-data/residents'
// import ResidentsTable from '../ResidentsTable/ResidentsTable'

const Residents = () => {
    return (
        <>
            <ApartmenPagetHeader apartment={apartments[2]} />
            {/* <ResidentsTable residents={RESIDENTS} /> */}
        </>
    )
}

export default Residents
