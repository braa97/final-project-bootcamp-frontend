import Navbar from "../Nabar-Sidebar/Navbar/Navbar";
import Sidebar from "../Nabar-Sidebar/Sidebar/Sidebar";

export default function Home({
  handleSidebarCollapse,
  handleDarkMode,
  isCollapsed,
}) {
  return (
    <>
      <div className="navbar-container">
        <Navbar
          handleSidebarCollapse={handleSidebarCollapse}
          handleDarkMode={handleDarkMode}
        />
      </div>
      <div className="sidebar-container">
        <Sidebar isCollapsed={isCollapsed} />
      </div>
    </>
  );
}
