import React from 'react'
import './InfoWidget.css'

const InfoWidget = ({ value, title, icon }) => {
    
    return (
        <div className='card-single'>
            <div>
                <h1>{value}</h1>
                <span>{title}</span>
            </div>
            <div>
                {title !== 'Allergies' && <span className={icon}></span>}
            </div>
        </div>
    )
}

export default InfoWidget
