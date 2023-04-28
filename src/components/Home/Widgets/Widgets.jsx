import React from 'react'
import './Widgets.css'
import { reedem, service, users, revenue, user } from '../../../Assets/index'

const Widgets = () => {
    return (
        <div className='home-widgets-container'>
            <div className='box box1'>
                <div>
                    <h3>7K</h3>
                    <div className='explanation'>Total Budget</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={revenue} alt='revenue' />
                </div>
            </div>
            <div className='box box2'>
                <div>
                    <h3>Residents</h3>
                    <div className='explanation'>Latest Residents</div>
                </div>
                <div className='avatars'>
                    <img
                        src='https://image.shutterstock.com/image-photo/confident-rich-eastern-indian-business-260nw-2200214153.jpg'
                        className='avatar'
                        alt='Avatar 1'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg'
                        className='avatar'
                        alt='Avatar 2'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/successful-caucasian-young-man-student-260nw-2141124049.jpg'
                        className='avatar'
                        alt='Avatar 3'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/portrait-smiling-mature-man-standing-260nw-2137527991.jpg'
                        className='avatar'
                        alt='Avatar 4'
                    />
                </div>
                <div className='icon-placeholder'>
                    <img src={user} alt='user' />
                </div>
            </div>
            <div className='box box3'>
                <div>
                    <h3>Apartments</h3>
                    <div className='explanation'>Latest Apartments</div>
                </div>
                <div className='avatars'>
                    <img
                        src='https://image.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg'
                        className='avatar'
                        alt='Apartment 1'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/eu-modern-european-complex-apartment-260nw-1445600369.jpg'
                        className='avatar'
                        alt='Apartment 2'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/cityscape-residential-area-modern-apartment-260nw-1723278520.jpg'
                        className='avatar'
                        alt='Apartment 3'
                    />
                    <img
                        src='https://image.shutterstock.com/image-photo/stylish-apartment-interior-modern-kitchen-260nw-1097696003.jpg'
                        className='avatar'
                        alt='Apartment 4'
                    />
                </div>
                <div className='icon-placeholder'>
                    <img src={reedem} alt='redeem' />
                </div>
            </div>
            <div className='box box4'>
                <div>
                    <h3>51</h3>
                    <div className='explanation'>Total Residents</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={users} alt='users' />
                </div>
            </div>
            <div className='box box5'>
                <div>
                    <h3>Upcoming Meetings</h3>
                    <div className='explanation'>21 Meetings</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={service} alt='service' />
                </div>
            </div>
            <div className='box box6'>
                <div>
                    <h3>Custom Topic</h3>
                    <div className='explanation'>custom topic</div>
                </div>
                <div className='icon-placeholder'>
                    <img src={service} alt='service' />
                </div>
            </div>
        </div>
    )
}

export default Widgets
