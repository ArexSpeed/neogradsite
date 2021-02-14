import React from 'react'
import {rectSizes, longRectSizes, squareSizes, circleSizes} from './gData'

const Generator = ({shape, size, radiusSize, radiusType, type, color, secondColor}) => {

  
  let sizeCode;
  if(shape === '-rect') {
    sizeCode = `width: ${rectSizes[Number(size.slice(1))].width};
    height: ${rectSizes[Number(size.slice(1))].height};
    `
  }
  if(shape === '-rect-long') {
    sizeCode = `width: ${longRectSizes[Number(size.slice(1))].width};
    height: ${longRectSizes[Number(size.slice(1))].height};
    `
  }
  if(shape === '-square') {
    sizeCode = `width: ${squareSizes[Number(size.slice(1))].width};
    height: ${squareSizes[Number(size.slice(1))].height};
    padding: 0px;
    `
  }
  if(shape === '-circle') {
    sizeCode = `width: ${circleSizes[Number(size.slice(1))].width};
    height: ${circleSizes[Number(size.slice(1))].height};
    border-radius: 50%;
    `
  }
  return (
    <div>
        {sizeCode}
    </div>
  )
}

export default Generator
