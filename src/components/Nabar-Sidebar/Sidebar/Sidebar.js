import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import ApartmentIcon from '@mui/icons-material/Apartment'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SummarizeIcon from '@mui/icons-material/Summarize'
import { Link } from 'react-router-dom'

const Sidebar = ({ isCollapsed }) => {
    return (
        <div className={`sidebar ${isCollapsed && 'collapse'}`}>
            <div className='center'>
                <ul>
                    <p className='sidebar-title'>MAIN</p>
                    <Link to='/'>
                        <li>
                            <DashboardIcon className='side-icon' />
                            <span className='sidebar-link'>Dashboard</span>
                        </li>
                    </Link>
                    <p className='sidebar-title'>LISTS</p>
                    <Link to='/residents'>
                        <li>
                            <PersonOutlineIcon className='side-icon' />
                            <span className='sidebar-link'>Residents</span>
                        </li>
                    </Link>
                    <Link to='/apartments'>
                        <li>
                            <ApartmentIcon className='side-icon' />
                            <span className='sidebar-link'>Apartments</span>
                        </li>
                    </Link>
                    <Link to='/appointments'>
                        <li>
                            <CalendarMonthIcon className='side-icon' />
                            <span className='sidebar-link'>Meetings</span>
                        </li>
                    </Link>
                    <p className='sidebar-title'>SERVICE</p>
                    <Link to='/medications'>
                        <li>
                            <BloodtypeIcon className='side-icon' />
                            <span className='sidebar-link'>Medications</span>
                        </li>
                    </Link>
                    <p className='sidebar-title'>USEFUL</p>
                    <Link to='/report'>
                        <li>
                            <SummarizeIcon className='side-icon' />
                            <span className='sidebar-link'>Shift Report</span>
                        </li>
                    </Link>
                    <Link to='/notifications'>
                        <li>
                            <NotificationsNoneIcon className='side-icon' />
                            <span className='sidebar-link'>Notifications</span>
                        </li>
                    </Link>
                    <Link to='/statistics'>
                        <li>
                            <InsertChartIcon className='side-icon' />
                            <span className='sidebar-link'>Statistics</span>
                        </li>
                    </Link>
                    <p className='sidebar-title'>USER</p>
                    <Link to='/profile'>
                        <li>
                            <AccountCircleOutlinedIcon className='side-icon' />
                            <span className='sidebar-link'>Profile</span>
                        </li>
                    </Link>
                    <Link to='/logout'>
                        <li>
                            <ExitToAppIcon className='side-icon' />
                            <span className='sidebar-link'>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
