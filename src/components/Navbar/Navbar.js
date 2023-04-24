import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <a>
            <h6 className="title">AptLife</h6>
          </a>
        </div>
        <div className="nav-item nav-btn" id="header-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-nav" id="header-menu">
        <div className="nav-left">
          <div className="nav-item active">
            <Link to={"/"}>Home</Link>
          </div>
          {/* <div className="nav-item">
            <Link to={"/reports"}>Reports</Link>
          </div> */}
          <div className="nav-item">
            <Link to={"/"}>google</Link>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}