import React from 'react'

const Sidebar = () => {
  return (
    <div>
    <ul>

     <li>
        <a href='#getstarted'>
        <button className="btn btn-rect-4 btn-border-move color-blue">
        Get Started
        </button>
        </a>
      </li> 
      <li>
        <a href='#shapes'>
        <button className="btn btn-rect-4 btn-border-move color-blue">
        Shapes
        </button>
        </a>
      </li> 
      <li>
        <a href='#radius'>
        <button className="btn btn-rect-4 btn-border-move color-blue">
         Radius
        </button>
        </a>
      </li> 
      <li>
        <a href='#types'>
        <button className="btn btn-rect-4 btn-border-move color-blue">
         Types
        </button>
        </a>
      </li> 
      <li>
        <a href='#colors'>
        <button className="btn btn-rect-4 btn-border-move color-blue">
         Colors
        </button>
        </a>
      </li> 
      </ul>
    </div>
  )
}

export default Sidebar
