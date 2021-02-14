import React from 'react'
import {rectSizes, longRectSizes, squareSizes, circleSizes} from './gData'

const Generator = ({shape, size, radiusSize, radiusType, type, color, secondColor}) => {

  let beginCode = `.button {`
  let sizeCode;
  let radiusCode;
  let typeCode;
  let typeCode2;

  //change color text in types
  const colorText = color === '#202124' || color === '#000000' || 
  color === '#3c4043' || color === '#2c2c2c' || color === '#a52a2a' || color === '#442424' ? '#fff' : '#000';

  switch(shape){
    case '-rect':
      sizeCode = `width: ${rectSizes[Number(size.slice(1))].width};
      height: ${rectSizes[Number(size.slice(1))].height};
      `
      break;
    case '-rect-long':
      sizeCode = `width: ${longRectSizes[Number(size.slice(1))].width};
    height: ${longRectSizes[Number(size.slice(1))].height};
    `
    break;
    case '-square':
      sizeCode = `width: ${squareSizes[Number(size.slice(1))].width};
    height: ${squareSizes[Number(size.slice(1))].height};
    padding: 0px;
    `
    break;
    case '-circle':
      sizeCode = `width: ${circleSizes[Number(size.slice(1))].width};
    height: ${circleSizes[Number(size.slice(1))].height};
    border-radius: 50%;
    `
    break;
    default:
      sizeCode = ''
      break;
  }

  switch (radiusType) {
    case "Normal":
      radiusCode = `border-radius: ${radiusSize};`;
      break;
    case "Double1":
      radiusCode = `border-radius: ${radiusSize} 0 ${radiusSize} 0;`;
      break;
    case "Double2":
      radiusCode = `border-radius: 0 ${radiusSize} 0 ${radiusSize};`;
      break;
    case "Top":
      radiusCode = `border-radius: ${radiusSize} ${radiusSize} 0 0;`;
      break;
    case "Bottom":
      radiusCode = `border-radius: 0 0 ${radiusSize} ${radiusSize};`;
      break;
    case "Left":
      radiusCode = `border-radius: ${radiusSize} 0 0 ${radiusSize};`;
      break;
    case "Right":
      radiusCode = `border-radius: 0 ${radiusSize} ${radiusSize} 0;`;
      break;
    case "Corner1":
      radiusCode = `border-radius: ${radiusSize} 0 0 0;;`;
      break;
    case "Corner2":
      radiusCode = `border-radius: 0 ${radiusSize} 0 0;`;
      break;
    case "Corner3":
      radiusCode = `border-radius: 0 0 ${radiusSize} 0;`;
      break;
    case "Corner4":
      radiusCode = `border-radius: 0 0 0 ${radiusSize};`;
      break;
    default:
      radiusCode = "";
      break;
  }

if(type === '-normal' && !secondColor) {
  typeCode = `
      color: ${colorText};
      text-align: center;
      border: none;
      transition: all 0.35s ease-in-out;
      background: ${color};
      }
      .button:hover {
        background: transparent;
        color: ${color};
        transition: all 0.35s ease-in-out;
      }
      `
}
if(type === '-normal' && secondColor){
  typeCode = `
      color: ${colorText};
      text-align: center;
      border: none;
      transition: all 0.35s ease-in-out;
      background: linear-gradient(60deg, ${color}, ${secondColor});
      }
      .button:hover {
        background: transparent;
        color: ${color};
        transition: all 0.35s ease-in-out;
      }
      `
}
if(type === '-neograd' && !secondColor){
  typeCode = `
  color: ${colorText};
  transition: all 400ms ease-in-out;
  text-align: center;
  border: none;
  background: linear-gradient(10deg, lighten(${color}, 10%), darken(${color}, 10%));
  box-shadow: 1px 1px 40px ${color} inset;
  }
  .button:hover {
    box-shadow: 0 0 10px 0 ${color} inset, 0 0 10px 3px ${color};
    background: transparent;
    color: ${color};
  }
  `
}
if(type === '-neograd' && secondColor){
  typeCode = `
  color: ${colorText};
  transition: all 400ms ease-in-out;
  text-align: center;
  border: none;
  background: linear-gradient(60deg, ${color}, ${secondColor});
  box-shadow: 1px 1px 40px ${color} inset;
}
  .button:hover {
    box-shadow: 0 0 10px 0 ${color} inset, 0 0 10px 3px ${secondColor};
    background: transparent;
  }
  `
}

  return (
    <div>
        {beginCode + sizeCode + radiusCode + typeCode}
    </div>
  )
}

export default Generator
