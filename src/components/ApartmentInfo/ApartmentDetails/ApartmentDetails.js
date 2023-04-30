import './ApartmentDetails.css'
import { Link } from 'react-router-dom'

const ApartmentDetails = ({ apartment }) => {

    return (
        <div className='apartment-details-component'>
            <h1 className='apartment-details-title'>
                {apartment.apartmentName}
                <Link to='#' target='_blank'>
                    <i className='fa fa-map-marker' aria-hidden='true'></i>
                </Link>
            </h1>
            <div className='apartment-details-widgets'>
                <img src={apartment.image} alt='' />

                <div className='apartment-info'>
                    <div className='info-item'>
                        <h5>City</h5>
                        <p>
                            {' '}
                            {apartment.address
                                ? apartment.address.split(', ')[1]
                                : null}
                        </p>
                    </div>
                    <div className='info-item'>
                        <h5>Street</h5>
                        <p>
                            {apartment.address
                                ? apartment.address.split(', ')[0] + '.'
                                : null}
                        </p>
                    </div>
                    <div className='info-item'>
                        <h5>Budget</h5>
                        <p>{`₪ ${
                            apartment.budget > 999
                                ? (apartment.budget / 1000).toFixed(1) + 'k'
                                : apartment.budget
                        }`}</p>
                    </div>
                    <div className='info-item'>
                        <h5>People</h5>
                        <p>
                            {' '}
                            {apartment.residents
                                ? apartment.residents.length + ' Residents'
                                : null}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApartmentDetails
