import React from 'react'
import {Link} from 'react-router-dom'
import "../Css/Home.css";
import logo11 from '../Images/logo-1-1.png'

const Navbar = () => {
  return (
    <div>
      <div className="overlap">
                    <img className="logo" alt="Logo" src={logo11} />
                </div>

                {/* Navbar */}
                <div className="nav">
                    <Link to='/onboard-facilities'><div className="nav-item">Onboard Facilities</div></Link>
                    <Link to= "/foods"><div className="nav-item">Food</div></Link>
                    <Link to= "/medicals"><div className="nav-item">Medical Facilities</div></Link>
                    <Link to= "/kuli"><div className="nav-item">Kuli No. 1</div></Link>
                    <Link to= "/alerts"><div className="nav-item">Alerts</div></Link>
                </div>
    </div>
  )
}

export default Navbar
