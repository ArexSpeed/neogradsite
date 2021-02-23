import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import StyleIcon from '@material-ui/icons/Style';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const Sidebar = ({hide}) => {
  return (
    <div>
    <ul>

     <li>
        <a href='#getstarted'>
        <button className="docs-slide">
        {hide ? 'Get Started' : <InfoIcon />}
        </button>
        </a>
      </li> 
      <li>
        <a href='#shapes'>
        <button className="docs-slide">
        {hide ? 'Shapes' : <SquareFootIcon />}
        </button>
        </a>
      </li> 
      <li>
        <a href='#radius'>
        <button className="docs-slide">
        {hide ? 'Radius' : <AspectRatioIcon />}
        </button>
        </a>
      </li> 
      <li>
        <a href='#types'>
        <button className="docs-slide">
        {hide ? 'Types' : <StyleIcon  />}
        </button>
        </a>
      </li> 
      <li>
        <a href='#colors'>
        <button className="docs-slide">
        {hide ? 'Colors' : <ColorLensIcon />}
        </button>
        </a>
      </li> 
      </ul>
    </div>
  )
}

export default Sidebar
