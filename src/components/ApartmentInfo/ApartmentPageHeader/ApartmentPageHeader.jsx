import React from 'react'
import './ApartmentPageHeader.css'
import CDN from '../CDN'
import { Link } from 'react-router-dom'
import { RESIDENTS } from '../../mock-data/residents'
import ResidentsTable from '../ResidentsTable/ResidentsTable'
const FONT_AWESOME_CDN =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'

function getAppartmentResidents(residentIds) {
    const resultedResidents = []
    for (let {residentId} of residentIds) {
        resultedResidents.push(RESIDENTS.find(r => r.residentId === residentId))
    }
    return resultedResidents
}

const ApartmenPagetHeader = ({ apartment }) => {
    return (
        <div>
            <CDN href={FONT_AWESOME_CDN} />
            <div className='apartment-header-container'>
                <img src={apartment.image} alt='' />
                <h1 className='apartment-name'>
                    {apartment.apartmentName}
                    <Link to={apartment.address.wazeLink} target='_blank'>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                    </Link>
                </h1>
                <div className='apartment-info'>
                    <div className='info-item'>
                        <h5>City</h5>
                        <p>{apartment.address.value.split(', ')[1]}</p>
                    </div>
                    <div className='info-item'>
                        <h5>Street</h5>
                        <p>{apartment.address.value.split(', ')[0] + '.'}</p>
                    </div>
                    <div className='info-item'>
                        <h5>People</h5>
                        <p>{apartment.residents.length + ' Residents'}</p>
                    </div>
                </div>
            </div>
            <ResidentsTable residents={getAppartmentResidents(apartment.residents)} />
        </div>
    )
}

export default ApartmenPagetHeader
