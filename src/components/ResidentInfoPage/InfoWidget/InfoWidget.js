import React from 'react'
import './InfoWidget.css'

const InfoWidget = ({ value, title, icon }) => {
    
    return (
        <div className='resident-info-card-single'>
            <div>
                <h5 className='value'>{value}</h5>
                <span className='title'>{title}</span>
            </div>
            <div>
                {title !== 'Allergies' && <span className={`${icon} icon`}></span>}
            </div>
        </div>
    )
}

export default InfoWidget
