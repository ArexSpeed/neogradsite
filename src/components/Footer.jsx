import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div>
      <div style={{height: '300px'}}>LOGO</div>
      <div>AX Studio &copy; {new Date().getFullYear()} All rights reserved <GitHubIcon /></div>
    </div>
  )
}

export default Footer
