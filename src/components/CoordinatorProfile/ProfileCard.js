import React from 'react'
import './ProfileCard.css'

const ProfileCard = ({img, name, address}) => {
     img = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
     name = 'Stam Name'
     address = '15 BenGurion St, Haifa, Israel'
    return (
        <div>s
            <div className='personal-card-container'>
                <div className='personal-card'>
                    <div className='image'>
                        <img src={img} alt=''/>
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
