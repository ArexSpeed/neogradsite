import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav.scss'
import '../neostyles/style.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">NeoGrad</div>
      <div className="nav-links">
      <Link to='/' className="nav-item"><button className="btn btn-rect-3 btn-neograd color-green">Home</button></Link>
      <Link to='/build' className="nav-item"><button className="btn btn-rect-3 btn-neograd color-blue">Build</button></Link>
      <Link to='/docs' className="nav-item"><button className="btn btn-rect-3 btn-neograd color-red">Docs</button></Link>
      </div>
      
    </nav>
  )
}

export default Nav
