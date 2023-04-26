import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
import './Widgets/Widgets'
import './ApartmentsTable/ApartmentsTable'
import Widgets from './Widgets/Widgets';
import ApartmentsTable from './ApartmentsTable/ApartmentsTable';

export default function Home({
    handleSidebarCollapse,
    handleDarkMode,
    isCollapsed,
    isLoggedin,
}) {
    return (
        <>
            {isLoggedin ? (
                <div className='home-page'>
                    <Sidebar />
                    <div className='home-container'>
                        <Navbar />
                        <Widgets />
                        <ApartmentsTable />
                    </div>
                    {/* !!! I commented the following code for testing the styles without auth... -badea */}

                    {/* <div className='navbar-container'>
                        <Navbar
                            handleSidebarCollapse={handleSidebarCollapse}
                            handleDarkMode={handleDarkMode}
                        />
                    </div>
                    <div className='sidebar-container'>
                        <Sidebar isCollapsed={isCollapsed} />
                    </div> */}
                </div>
            ) : null}
        </>
    )
}
