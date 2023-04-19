import React from 'react'
import './ProfileCard.css'

const ProfileCard = ({img, name, address}) => {
    return (
        <div>
            <div className='personal-card-container'>
                <div className='personal-card'>
                    <div className='image'>
                        <img src={img} />
                    </div>
                    <div className='content'>
                        <h1>{name}</h1>
                        <h3>{address}</h3>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
