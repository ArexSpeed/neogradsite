import React from 'react'
import {rectSizes, longRectSizes, squareSizes, circleSizes} from './gData'

const Generator = ({shape, size, radiusSize, radiusType, type, color, secondColor}) => {

  let sizeCode;
  let radiusCode;

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

  switch(radiusType){
    case 'Normal':
      radiusCode = `border-radius: ${radiusSize};`
      break;
    case 'Double1':
      radiusCode = `border-radius: ${radiusSize} 0 ${radiusSize} 0;`
      break;
    case 'Double2':
      radiusCode = `border-radius: 0 ${radiusSize} 0 ${radiusSize};`
      break;
    case 'Top':
      radiusCode = `border-radius: ${radiusSize} ${radiusSize} 0 0;`
      break;
    case 'Bottom':
      radiusCode = `border-radius: 0 0 ${radiusSize} ${radiusSize};`
      break;
    case 'Corner1':
      radiusCode = `border-radius: ${radiusSize} 0 0 0;;`
    break;
    case 'Corner2':
      radiusCode = `border-radius: 0 ${radiusSize} 0 0;`
      break;
    case 'Corner3':
      radiusCode = `border-radius: 0 0 ${radiusSize} 0;`
      break;
    case 'Corner4':
      radiusCode = `border-radius: 0 0 0 ${radiusSize};`
      break;
    default:
      radiusCode = ''
      break;
  }
  if(radiusType === 'Double 1'){
    radiusCode = `border-radius: ${radiusSize} 0 ${radiusSize} 0;`
  }

  return (
    <div>
        {sizeCode + radiusCode}
    </div>
  )
}

export default Generator
