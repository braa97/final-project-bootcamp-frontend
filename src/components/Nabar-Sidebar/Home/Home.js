import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import './Home.css'
// this page is for testing sidebar and navbar, it can be the app.js file
const Home = ({ handleDarkMode }) => {
    const [isCollapsed, setCollapsed] = useState(false)

    const handleSidebarCollapse = function () {
        setCollapsed(!isCollapsed)
    }
    return (
        <div className='home'>
            <Navbar
                handleSidebarCollapse={handleSidebarCollapse}
                handleDarkMode={handleDarkMode}
            />
            <Sidebar isCollapsed={isCollapsed} />
        </div>
    )
}

export default Home
