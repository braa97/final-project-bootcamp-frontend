import React from 'react'


const ProfileCard = ({img, name, IDNmber, phoneNumber,email}) => {
    /* img = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
     name = 'Coordinator Name'
     IDNmber = '316646388'*/
    return (
        <div>
            <div className='personal-card-container'>
                <div className='personal-card'>
                    <div className='image'>
                        <img src={img} alt=''/>
                    </div>
                    <div className='content'>
                        <h1>{name}</h1>
                        <h3>ID: {IDNmber}</h3>
                        <h3> {phoneNumber}</h3>
                        <h3>Email: {email}</h3>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
