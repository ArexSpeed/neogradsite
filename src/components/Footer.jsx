import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../images/nglogobig.png'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <div className="main-footer">
      <div style={{maxWidth: '80%'}}>
        <img src={logo} alt="NeoGrad" style={{maxWidth: '80%'}} />
      </div>
      <div>AX Studio &copy; {new Date().getFullYear()} All rights reserved <GitHubIcon /></div>
    </div>
  )
}

export default Footer
