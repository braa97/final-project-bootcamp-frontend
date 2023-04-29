import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const getCurrentYear = function () {
        var currentYear = new Date().getFullYear()
        return currentYear
    }

    return (
        <footer className='footer'>
            <ul className='social-icons'>
                <li>
                    <Link
                        to='https://github.com/Henry1998N/final-project-bootcamp-backend.git'
                        target='_blank'
                    >
                        <ion-icon name='code-outline'></ion-icon>
                    </Link>
                </li>
                <li>
                    <Link
                        to='https://github.com/Henry1998N/final-project-bootcamp-frontend.git'
                        target='_blank'
                    >
                        <ion-icon name='storefront-outline'></ion-icon>
                    </Link>
                </li>
            </ul>
            <ul className='menu'>
                <li>
                    <Link to='#'>Badea</Link>
                </li>
                <li>
                    <Link to='#'>Baraa</Link>
                </li>
                <li>
                    <Link to='#'>Henry</Link>
                </li>
                <li>
                    <Link to='#'>Tamer</Link>
                </li>
                <li>
                    <Link to='#'>Abdallah</Link>
                </li>
            </ul>
            <p>
                &copy; {getCurrentYear()} CareCompanion+ | All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
