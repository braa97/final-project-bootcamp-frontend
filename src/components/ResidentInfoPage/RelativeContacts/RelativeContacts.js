import React from 'react'

import './RelativeContacts.css'

const RelativeContacts = ({ contacts }) => {
    return (
        <>
            <div className='contacts'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Relative Contacts</h3>
                    </div>
                    <div className='card-body'>
                        {contacts.map((c, i) => (
                            <div className='contact-container' key={i}>
                                <div className='contact-info'>
                                    <img
                                        className='contact-img'
                                        src='https://static.thenounproject.com/png/1095867-200.png'
                                    />
                                    <div>
                                        <h4>{c.name}</h4>
                                        <small>{c.contactNumber}</small>
                                    </div>
                                </div>
                                <a href={`tel: ${c.contactNumber}`}>
                                    <div className='contact-icon'>
                                        <span className='las la-phone'></span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelativeContacts
