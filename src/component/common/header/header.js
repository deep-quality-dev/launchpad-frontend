import React from "react";
import { Link, useLocation } from "react-router-dom";
const { useState, useEffect } = React;

const Header = (props) => {
  
  const location = useLocation();
  const [menuIdx, setMenuIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(0);

  useEffect(() => {
    
    if (location.pathname === "/create") {
      setMenuIdx(2);
    } else if (location.pathname === "/token-contract") {
      setMenuIdx(1);
    } else if (location.pathname === "/create2") {
      setMenuIdx(3);
    } else if (location.pathname === "/token-contract2") {
      setMenuIdx(4);
    } else {
      setMenuIdx(0);
    }
  }, [])

  return (
    <div className="page-main-header">
      <div className="main-header-right">
        <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/projects`}>
            <img
              src={require("../../../assets/images/logo/logo.png")}
              alt=""
            />
          </Link>
        </div>
        <div className={menuOpen? 'mobile-menu-icon open' : 'mobile-menu-icon'} onClick={()=>setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={menuOpen? 'nav-menus open' : 'nav-menus'}>
          <a href={`${process.env.PUBLIC_URL}/projects`} className={menuIdx===0? 'active' : ''}>Projects</a>
          <a href={`${process.env.PUBLIC_URL}/token-contract`} className={menuIdx===1? 'active' : ''}>Token Wizard</a>
          <a href={`${process.env.PUBLIC_URL}/create`} className={menuIdx===2? 'active' : ''}>Create Sale</a>
          <a href={`${process.env.PUBLIC_URL}/create2`} className={menuIdx===3? 'active' : ''}>Create2</a>
          <a href={`${process.env.PUBLIC_URL}/token-contract2`} className={menuIdx===4? 'active' : ''}>Token Wizard2</a>
          <div className="nav-right mobile">
            <ul>
              <li><Link to="{#}">Network</Link></li>
              <li><Link to="{#}">Connect Wallet</Link></li>
            </ul>
          </div>
        </div>

        <div className="nav-right">
          <ul>
            <li><Link to="{#}">Network</Link></li>
            <li><Link to="{#}">Connect Wallet</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
