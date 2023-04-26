import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
// import LocalShippingIcon from '@mui/icons-material/LocalShipping'
// import CreditCardIcon from '@mui/icons-material/CreditCard'
import StoreIcon from '@mui/icons-material/Store'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='logo'>
                        Care
                        <br />
                        Companion+
                    </span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <span>Residents</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        <li>
                            <StoreIcon className='icon' />
                            <span>Apartments</span>
                        </li>
                    </Link>

                    <p className='title'>USEFUL</p>
                    <li>
                        <InsertChartIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>Medications</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Report</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar


// old sidebar with links:

// import './Sidebar.css'
// import DashboardIcon from '@mui/icons-material/Dashboard'
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
// import BloodtypeIcon from '@mui/icons-material/Bloodtype'
// import ApartmentIcon from '@mui/icons-material/Apartment'
// import InsertChartIcon from '@mui/icons-material/InsertChart'
// import ExitToAppIcon from '@mui/icons-material/ExitToApp'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
// import SummarizeIcon from '@mui/icons-material/Summarize'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// const Sidebar = ({ isCollapsed }) => {
//     const navigate = useNavigate()

//     const Logout = () => {
//         localStorage.removeItem("instructorId")
//         localStorage.removeItem("token")
//         window.location.reload()
//     }
//     return (
//         <div className={`sidebar ${isCollapsed && 'collapse'}`}>
//             <div className='center'>
//                 <ul>
//                     <p className='sidebar-title'>MAIN</p>
//                     <Link to='/'>
//                         <li>
//                             <DashboardIcon className='side-icon' />
//                             <span className='sidebar-link'>Dashboard</span>
//                         </li>
//                     </Link>
//                     <p className='sidebar-title'>LISTS</p>
//                     <Link to='/residents'>
//                         <li>
//                             <PersonOutlineIcon className='side-icon' />
//                             <span className='sidebar-link'>Residents</span>
//                         </li>
//                     </Link>
//                     <Link to='/apartments'>
//                         <li>
//                             <ApartmentIcon className='side-icon' />
//                             <span className='sidebar-link'>Apartments</span>
//                         </li>
//                     </Link>
//                     <Link to='/appointments'>
//                         <li>
//                             <CalendarMonthIcon className='side-icon' />
//                             <span className='sidebar-link'>Meetings</span>
//                         </li>
//                     </Link>
//                     <p className='sidebar-title'>SERVICE</p>
//                     <Link to='/medications'>
//                         <li>
//                             <BloodtypeIcon className='side-icon' />
//                             <span className='sidebar-link'>Medications</span>
//                         </li>
//                     </Link>
//                     <p className='sidebar-title'>USEFUL</p>
//                     <Link to='/report'>
//                         <li>
//                             <SummarizeIcon className='side-icon' />
//                             <span className='sidebar-link'>Shift Report</span>
//                         </li>
//                     </Link>
//                     <Link to='/notifications'>
//                         <li>
//                             <NotificationsNoneIcon className='side-icon' />
//                             <span className='sidebar-link'>Notifications</span>
//                         </li>
//                     </Link>
//                     <Link to='/statistics'>
//                         <li>
//                             <InsertChartIcon className='side-icon' />
//                             <span className='sidebar-link'>Statistics</span>
//                         </li>
//                     </Link>
//                     <p className='sidebar-title'>USER</p>
//                     <Link to='/profile'>
//                         <li>
//                             <AccountCircleOutlinedIcon className='side-icon' />
//                             <span className='sidebar-link'>Profile</span>
//                         </li>
//                     </Link>
//                     <Link onClick={Logout}>
//                         <li>
//                             <ExitToAppIcon className='side-icon' />
//                             <span className='sidebar-link'>Logout</span>
//                         </li>
//                     </Link>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Sidebar
