import React from 'react'
import {Link } from 'react-router-dom'
import './About.css'
import './Home.css'
import Zoom from 'react-reveal/Zoom';
export default function Nave() {
  return (
    <Zoom>
<nav className="navbar navbar-expand-lg backgrundNav" >
      <div className="container text-center">
        <a className="navbar-brand text-light" href="/"><img src='/images/papaLogo-2-rem.png' class="logo " alt="papa warum sind wir hier"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  justify-content-md-center" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item  linkHover">
              <Link className="nav-link active text-light font " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item   linkHover">
              <Link className="nav-link text-light  font" to="/Veranstaltungen">Veranstaltungen</Link>
            </li>
            <li className="nav-item linkHover ">
              <Link className="nav-link text-light font" to="/Erfolg">Erfolg</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-light linkHover font" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
              </Link>
              <ul className="dropdown-menu   linkopsty">
                <li><Link className="dropdown-item text-light hov font" to="/About">About</Link></li>
                <li><Link className="dropdown-item text-light hov font" to="/Contact">Contact</Link></li>

                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item text-light hov font" to="/Spende">Spende</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-light linkHover font" to="/Admin">Admin</Link>
            </li> */}
          </ul>

        </div>

      </div>
    </nav>
    </Zoom>
  )
}
