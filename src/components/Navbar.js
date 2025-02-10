import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
        <Link className={`navbar-brand ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} to="/">{props.title}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            
            {/* we write javascript logic in the backticks `{}` */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                 <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string,
}

//default props -> it works when we don't give title and about text values in <Navbar/>
// Navbar.defaultProps={
//     title:'Set title here',
//     aboutText: 'About text here'
// }