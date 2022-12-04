import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css';


const Navbar = () => {
  return (
    <div> <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <Link className="navbar-brand mt-2 mt-lg-0" to= { "/Home" }>
          <img
            src="https://media.istockphoto.com/id/1168518509/vector/email-marketing.jpg?s=612x612&w=0&k=20&c=1b3Ek3YbdAdPmW-KjeznqphxTLB-4NT1vK6bwfRcnI4="
            height={45}
            alt="Newsletter"
            loading="lazy"/>
        </Link>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="link-secondary me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
        {/* Notifications */}
        <Link to={'/Login'} className='btn btn-primary'>Login</Link>
        <Link to={'/Register'} className='btn btn-primary'> Sign-Up</Link>

        {/* Avatar */}
        <div className="dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height={25}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">
                My profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </div>
  )
}

export default Navbar