import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
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
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('instructorId')
        window.location.reload()
    }

    return (
        <div className='sidebar'>
            <div className='center'>
                <ul>
                    <hr className='sidebar-divider' />
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <hr className='sidebar-divider' />
                    <Link to='/residents' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineIcon className='icon' />
                            <span>Residents</span>
                        </li>
                    </Link>
                    <Link to='/apartments' style={{ textDecoration: 'none' }}>
                        <li>
                            <StoreIcon className='icon' />
                            <span>Apartments</span>
                        </li>
                    </Link>

                    <hr className='sidebar-divider' />
                    <Link to='/scheduler'>
                        <li>
                            <InsertChartIcon className='icon' />
                            <span>Scheduler</span>
                        </li>
                    </Link>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <hr className='sidebar-divider' />
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
                    <hr className='sidebar-divider' />
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li onClick={logout}>
                        <ExitToAppIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
