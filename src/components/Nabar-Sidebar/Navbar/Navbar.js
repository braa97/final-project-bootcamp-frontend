import './Navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
// import logoImg from './logo3.png'

const Navbar = ({ handleSidebarCollapse, handleDarkMode }) => {

    return (
        <div className='navbar'>
            <div className='logo-container'>
                <Link to='/'>
                    <span className='logo'>CareCompanion</span>
                </Link>
            </div>
            <div className='nav-wrapper'>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <MenuIcon
                            className='nav-icon'
                            onClick={handleSidebarCollapse}
                        />
                    </div>
                    <div className='nav-search'>
                        <input type='text' placeholder='Search...' />
                        <SearchOutlinedIcon />
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <DarkModeOutlinedIcon
                            className='nav-icon'
                            onClick={handleDarkMode}
                        />
                    </div>
                    <div className='nav-item'>
                        <NotificationsNoneOutlinedIcon className='nav-icon' />
                        <div className='notification-counter'>1</div>
                    </div>
                    <div className='nav-item'>
                        <img
                            src='https://image.shutterstock.com/image-photo/heavy-industry-engineering-factory-interior-260nw-1870491376.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
