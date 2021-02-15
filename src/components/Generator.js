import React, {useState, useEffect} from 'react'
import {rectSizes, longRectSizes, squareSizes, circleSizes, ldColors} from './gData'

const Generator = ({shape, size, radiusSize, radiusType, type, color, secondColor}) => {

  const [copySuccess, setCopySuccess] = useState('Copied css code!');
  const [lighten, setLighten] = useState('')
  const [darken, setDarken] = useState('')

    //lighten, darken for gradient background
    useEffect(() => {
      ldColors.filter(item => item.base === color).map(item => setLighten(item.lighten))
      ldColors.filter(item => item.base === color).map(item => setDarken(item.darken))
      
    }, [color])

  const copyToClipboard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied css code!'); 
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
    alert(copySuccess)
  };

  let beginCode = `.button {`
  let sizeCode;
  let radiusCode;
  let typeCode;

  //change color text in types
  const colorText = color === '#202124' || color === '#000000' || 
  color === '#3c4043' || color === '#2c2c2c' || color === '#a52a2a' || color === '#442424' ? '#fff' : '#000';



  console.log('lighten: ', lighten, 'darken: ', darken)


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
  background: linear-gradient(10deg, ${lighten}, ${darken});
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
if(type === '-neograd-r' && !secondColor){
  typeCode = `
  background: transparent;
  box-shadow: 0 0 10px 0 ${color} inset, 0 0 10px 0px ${color};
  border-color: ${color};
  color: ${color};
  }
  .button:hover{
    color: ${colorText};
    background: linear-gradient( 60deg, ${lighten}, ${darken});
    box-shadow: 1px 1px 40px ${color} inset;
    transition: all 400ms ease-in-out;
  }
  `
}
if(type === '-neograd-r' && secondColor){
  typeCode = `
  transition: all 400ms ease-in-out;
  text-align: center;
  border: none;
  background: linear-gradient(60deg, ${color}, ${secondColor});
  box-shadow: 1px 1px 40px ${color} inset;
  }
  .button:hover {
    color: ${colorText};
    box-shadow: 0 0 10px 0 ${color} inset, 0 0 10px 3px ${secondColor};
    background: transparent;
  }
  `
}
if(type === '-grad' && !secondColor){
  typeCode = `
  color: ${colorText};
  background: linear-gradient(to left, ${lighten}, ${darken});
  border: none;
  transition: all 200ms ease-in-out;
  }
  .button:hover {
    box-shadow: inset -3px 3px 10px ${lighten},
          inset 3px -3px 10px ${darken};
  }
  `
}
if(type === '-grad' && secondColor){
  typeCode = `
  color: ${colorText};
  background: linear-gradient(45deg, ${color}, ${secondColor});
  }
.button:hover {
  box-shadow: inset -3px 3px 10px ${lighten},
  inset 3px -3px 10px ${darken};
  }
  `
}
if(type === '-grad-radial' && !secondColor){
  typeCode = `
  color: ${colorText};
  background: radial-gradient(${lighten}, ${darken});
  border: none;
  transition: all 200ms ease-in-out;
  }
  .button:hover{
    background: radial-gradient(${lighten}, ${darken});
  }
  `
}
if(type === '-grad-radial' && secondColor){
  typeCode = `
  color: ${colorText};
  background: radial-gradient(${color}, ${secondColor});
  border: none;
  transition: all 200ms ease-in-out;
  }
  .button:hover{
    background: radial-gradient(${secondColor}, ${color});
  }
  `
}
if(type === '-solid' && !secondColor){
  typeCode = `
  color: ${colorText};
  border: none;
  background: ${color};
  }
  `
}
if(type === '-solid' && secondColor){
  typeCode = `
  color: ${colorText};
  border: none;
  background: linear-gradient(45deg, ${color}, ${secondColor});
  }
  `
}
if(type === '-solid-border' && !secondColor){
  typeCode = `
  color: ${color};
  border: 2px groove;
  background: transparent;
  border-color: ${color};
  }
  `
}
if(type === '-solid-border' && secondColor){
  typeCode = `
  color: ${color};
  border: 2px groove;
  background: transparent;
  border-color: ${color} ${secondColor};
  }
  `
}
if(type === '-neon' && !secondColor){
  typeCode = `
  color: ${colorText};
  border: none;
  transition: box-shadow 400ms;
  background: ${color};
  box-shadow: 0 0 10px ${color}, 0 0 10px ${color} inset;
  }
  .button:hover{
    box-shadow: 0 0 5px ${color}, 0 0 25px ${color}, 0 0 50px ${color};
  }
  `
}
if(type === '-neon' && secondColor){
  typeCode = `
  color: ${colorText};
  border: none;
  transition: box-shadow 400ms;
  background: linear-gradient(45deg, ${color}, ${secondColor});
  box-shadow: 0 0 15px ${color}, 0 0 15px 3px ${color} inset;
  }
  .button:hover{
    box-shadow: 0 0 10px ${color}, 0 0 10px 3px ${color} inset;
  }
  `
}
if(type === '-neon-border' && !secondColor){
  typeCode = `
  color: ${color};
  border: none;
  transition: box-shadow 400ms;
  background: transparent;
  box-shadow: 0 0 10px ${color}, 0 0 10px 3px ${color} inset;
  }
  .button:hover{
    box-shadow: 0 0 15px ${color}, 0 0 15px 3px ${color} inset;
  }
  `
}
if(type === '-neon-border' && secondColor){
  typeCode = `
  color: ${color};
  border: none;
  transition: box-shadow 400ms;
  background: transparent;
  box-shadow: 0 0 15px ${color}, 0 0 15px 3px ${secondColor} inset;
  }
  .button:hover{
    box-shadow: 0 0 10px ${color}, 0 0 10px 3px ${secondColor} inset;
  }
  `
}
if(type === '-neon-reflex' && !secondColor){
  typeCode = `
  color: ${colorText};
  border: none;
  transition: all 400ms;
  background: ${color};
  letter-spacing: 4px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  margin: 30px 0;
  }
  .button:hover{
    color: #000;
    box-shadow: 0 0 5px ${color}, 0 0 25px ${color}, 0 0 50px ${color};
  }
  `
}
if(type === '-neon-reflex' && secondColor){
  typeCode = `
  color: ${colorText};
  border: none;
  transition: all 400ms;
  background: linear-gradient(45deg, ${color}, ${secondColor});
  letter-spacing: 4px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  margin: 30px 0;
  }
  .button:hover{
    color: #000;
    box-shadow: 0 0 5px ${color}, 0 0 25px ${color}, 0 0 50px ${color},
              0 0 5px ${secondColor}, 0 0 25px ${secondColor}, 0 0 50px ${secondColor};
  }
  `
}
if(type === '-border-move' && !secondColor){
  typeCode = `
  color: ${color};
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  background: transparent;
  border: none;
  text-decoration: none;
  overflow: hidden;
  }
  .button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${color};
    border-left: 2px solid ${color};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button::after{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid ${color};
    border-right: 2px solid ${color};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button:hover::before{
    width: 100%;
    height: 100%;
  }
  .button:hover::after{
    width: 100%;
    height: 100%;
  }
  `
}
if(type === '-border-move' && secondColor){
  typeCode = `
  color: ${color};
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  background: transparent;
  border: none;
  text-decoration: none;
  overflow: hidden;
  }
  .button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${color};
    border-left: 2px solid ${color};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button::after{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid ${secondColor};
    border-right: 2px solid ${secondColor};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button:hover::before{
    width: 100%;
    height: 100%;
  }
  .button:hover::after{
    width: 100%;
    height: 100%;
  }
  `
}
if(type === '-border-move-light' && !secondColor){
  typeCode = `
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  color: ${color};
  background: transparent;
  border: none;
  text-decoration: none;
  overflow: hidden;
  }
  .button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid;
    border-left: 2px solid;
    border-color: ${color};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: ${color};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button:hover{
    background: ${color};
    box-shadow: 0 0 20px $val;
    border: none;
    transition-delay: 0.5s;
    color: ${colorText}
  }
  .button:hover:before {
    width: 100%;
    height: 100%;
  }
  .button:hover::after {
    width: 100%;
    height: 100%;
  }
  `
}
if(type === '-border-move-light' && secondColor){
  typeCode = `
  position: relative;
  padding: 10px 30px;
  margin: 0 15px;
  color: ${color};
  background: transparent;
  border: none;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  }
  .button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid;
    border-left: 2px solid;
    border-color: ${color};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: ${secondColor};
    border-radius: inherit;
    transition: 0.5s;
  }
  .button:hover{
    background: ${color};
    box-shadow: -10px -10px 20px ${color}, 10px 10px 20px ${secondColor};
    border: none;
    transition-delay: 0.5s;
    color: ${colorText}
  }
  .button:hover:before {
    width: 100%;
    height: 100%;
  }
  .button:hover::after {
    width: 100%;
    height: 100%;
  }
  `
}
if(type === '-slide-left' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(61deg, ${lighten} 0%, ${color} 100%);
    transition: all 1s;
    border-radius: inherit;
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${color}, 0px 0px 1px ${lighten};
  }
  .button:hover::after{
    width: 100%;
  }
  `
}
if(type === '-slide-left' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${secondColor}, 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(61deg, ${secondColor} 0%, ${color} 100%);
    transition: all 1s;
    border-radius: inherit;
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${secondColor}, 0px 0px 1px ${color};
  }
  .button:hover::after{
    width: 100%;
  }
  `
}
if(type === '-slide-right' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(61deg, ${lighten} 0%, ${color} 100%);
    transition: all 1s;
    border-radius: inherit;
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${color}, 0px 0px 1px ${lighten};
  }
  .button:hover::after{
    width: 100%;
  }
  `
}
if(type === '-slide-right' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${secondColor}, 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(61deg, ${secondColor} 0%, ${color} 100%);
    transition: all 1s;
    border-radius: inherit;
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${secondColor}, 0px 0px 1px ${color};
  }
  .button:hover::after{
    width: 100%;
  }
  `
}
if(type === '-slide-down' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.5s;
    border-radius: inherit;
    background: linear-gradient(61deg, ${lighten} 0%, ${color} 100%);
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${color}, 0px 0px 1px ${lighten};
  }
  .button:hover::after{
    height: 100%;
  }
  `
}
if(type === '-slide-down' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.5s;
    border-radius: inherit;
    background: linear-gradient(180deg, ${secondColor} 0%, ${color} 100%);
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${secondColor}, 0px 0px 1px ${color};
  }
  .button:hover::after{
    height: 100%;
  }
  `
}
if(type === '-slide-up' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.5s;
    border-radius: inherit;
    background: linear-gradient(61deg, ${lighten} 0%, ${color} 100%);
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${color}, 0px 0px 1px ${lighten};
  }
  .button:hover::after{
    height: 100%;
  }
  `
}
if(type === '-slide-up' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.5s;
    border-radius: inherit;
    background: linear-gradient(180deg, ${secondColor} 0%, ${color} 100%);
    z-index: -1;
    
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 1px ${secondColor}, 0px 0px 1px ${color};
  }
  .button:hover::after{
    height: 100%;
  }
  `
}
if(type === '-slide-middle-in' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-radius: inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 100%;
    height: 0;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-radius: inherit;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    height: 50%;
  }
  .button:hover::before{
    height: 50%;
  }
  `
}
if(type === '-slide-middle-in' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    color: #fff;
    background: ${color};
    transition: all 0.5s;
    border-radius: inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 100%;
    height: 0;
    color: #fff;
    background: ${secondColor};
    transition: all 0.5s;
    border-radius: inherit;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    height: 50%;
  }
  .button:hover::before{
    height: 50%;
  }
  `
}
if(type === '-slide-middle-out' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 50%;
    right: 0;
    width: 100%;
    height: 0;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    height: 50%;
  }
  .button:hover::before{
    height: 50%;
  }
  `
}
if(type === '-slide-middle-out' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 50%;
    right: 0;
    width: 100%;
    height: 0;
    color: ${colorText};
    background: ${secondColor};
    transition: all 0.5s;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    height: 50%;
  }
  .button:hover::before{
    height: 50%;
  }
  `
}
if(type === '-slide-center-in' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-radius: inherit;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-radius: inherit;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    width: 50%;
  }
  .button:hover::before{
    width: 50%;
  }
  `
}
if(type === '-slide-center-in' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-radius: inherit;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${secondColor};
    transition: all 0.5s;
    border-radius: inherit;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${secondColor};
  }
  .button:hover::after{
    width: 50%;
  }
  .button:hover::before{
    width: 50%;
  }
  `
}
if(type === '-slide-center-out' && !secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 0;
    right: 50%;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    width: 50%;
  }
  .button:hover::before{
    width: 50%;
  }
  `
}
if(type === '-slide-center-out' && secondColor){
  typeCode = `
  color: ${color};
  text-align: center;
  position: relative;
  transition: all 0.35s;
  background: transparent;
  border: inherit;
  z-index: 1;
  box-shadow: 0px 0px 5px ${color};
  overflow: hidden;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    z-index: -1;
  }
  .button::before{
    position: absolute;
    content: "";
    bottom: 0;
    right: 50%;
    width: 0;
    height: 100%;
    color: ${colorText};
    background: ${secondColor};
    transition: all 0.5s;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${secondColor};
  }
  .button:hover::after{
    width: 50%;
  }
  .button:hover::before{
    width: 50%;
  }
  `
}
if(type === '-slide-circle' && !secondColor){
  typeCode = `
  color: ${color};
  box-shadow: 0px 0px 5px ${color};
  text-align: center;
  position: relative;
  transition: all 0.5s ease-in-out;
  background: transparent;
  border: inherit;
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    color: ${colorText};
    background: ${color};
    transition: all 0.5s ease-in-out;
    border-radius: 100%;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    height: 300px;
    width: 300px;
  }
  `
}
if(type === '-slide-circle' && secondColor){
  typeCode = `
  color: ${color};
  box-shadow: 0px 0px 5px ${color};
  text-align: center;
  position: relative;
  transition: all 0.5s ease-in-out;
  background: transparent;
  border: inherit;
  overflow: hidden;
  z-index: 1;
  }
  .button::after{
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    color: ${colorText};
    background: radial-gradient(${color}, ${secondColor});
    transition: all 0.5s ease-in-out;
    border-radius: 100%;
    z-index: -1;
  }
  .button:hover{
    color: ${colorText};
    box-shadow: 0px 0px 10px ${color};
  }
  .button:hover::after{
    height: 300px;
    width: 300px;
  }
  `
}
if(type === '-border-behind' && !secondColor){
  typeCode = `
  border: none;
  position: relative;
  color: ${colorText};
  background: linear-gradient(10deg, ${lighten}, ${darken});
  transition: all 0.5s ease-in;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button:hover{
    top: 0;
    left: 0;
    transition: all 0.5s ease-in;
  }
  .button:hover::before{
    top: -15px;
    left: 15px;
    transition: all 0.35s ease-in;
    border: 2px solid ${color};
    box-shadow: 0 0 20px ${color};
  }
  .button:hover::after{
    top: 15px;
    left: -15px;
    transition: all 0.35s ease-in;
    border: 2px solid ${color};
    box-shadow: 0 0 20px ${color};
  }
  `
}
if(type === '-border-behind' && secondColor){
  typeCode = `
  border: none;
  position: relative;
  color: ${colorText};
  background: linear-gradient(10deg, ${color}, ${secondColor});
  transition: all 0.5s ease-in;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button:hover{
    top: 0;
    left: 0;
    transition: all 0.5s ease-in;
  }
  .button:hover::before{
    top: -15px;
    left: 15px;
    transition: all 0.35s ease-in;
    border: 2px solid ${secondColor};
    box-shadow: 0 0 20px ${secondColor};
  }
  .button:hover::after{
    top: 15px;
    left: -15px;
    transition: all 0.35s ease-in;
    border: 2px solid ${color};
    box-shadow: 0 0 20px ${color};
  }
  `
}
if(type === '-shadow-behind' && !secondColor){
  typeCode = `
  border: none;
  position: relative;
  color: ${colorText};
  background: linear-gradient(10deg, ${color}, ${secondColor});
  transition: all 0.5s ease-in;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button:hover{
    top: 0;
    left: 0;
    transition: all 0.5s ease-in;
  }
  .button:hover::before{
    top: -15px;
    left: 15px;
    transition: all 0.35s ease-in;
    background: ${color};
    box-shadow: 0 0 20px ${color};
  }
  .button:hover::after{
    top: 15px;
    left: -15px;
    transition: all 0.35s ease-in;
    background: ${color};
    box-shadow: 0 0 20px ${color};
  }
  `
}
if(type === '-shadow-behind' && secondColor){
  typeCode = `
  border: none;
  position: relative;
  color: ${colorText};
  background: linear-gradient(10deg, ${color}, ${secondColor});
  transition: all 0.5s ease-in;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.5s ease-in;
  }
  .button:hover{
    top: 0;
    left: 0;
    transition: all 0.5s ease-in;
  }
  .button:hover::before{
    top: -15px;
    left: 15px;
    transition: all 0.35s ease-in;
    background: ${secondColor};
    box-shadow: 0 0 20px ${secondColor};
  }
  .button:hover::after{
    top: 15px;
    left: -15px;
    transition: all 0.35s ease-in;
    background: ${color};
    box-shadow: 0 0 20px ${color};
  }
  `
}
if(type === '-double-border' && !secondColor){
  typeCode = `
  color: ${color};
  border: none;
  border-top: 2px groove ${color};
  border-bottom: 2px groove ${color};
  background: transparent;
  transition: all 0.35s ease-in;
  }
  .button:hover{
    border-top: 10px groove ${color};
    border-bottom: 10px groove ${color};
  }
  `
}
if(type === '-double-border' && secondColor){
  typeCode = `
  color: ${color};
  border: none;
  border-top: 2px groove ${color};
  border-bottom: 2px groove ${secondColor};
  background: transparent;
  transition: all 0.35s ease-in;
  }
  .button:hover{
    border-top: 10px groove ${color};
    border-bottom: 10px groove ${secondColor};
  }
  `
}
if(type === '-double-border2' && !secondColor){
  typeCode = `
  color: ${color};
  border: none;
  border-left: 2px groove ${color};
  border-right: 2px groove ${color};
  background: transparent;
  transition: all 0.35s ease-in;
  }
  .button:hover{
    border-left: 10px groove ${color};
    border-right: 10px groove ${color};
  }
  `
}
if(type === '-double-border2' && secondColor){
  typeCode = `
  color: ${color};
  border: none;
  border-left: 2px groove ${color};
  border-right: 2px groove ${secondColor};
  background: transparent;
  transition: all 0.35s ease-in;
  }
  .button:hover{
    border-left: 10px groove ${color};
    border-right: 10px groove ${secondColor};
  }
  `
}
if(type === '-hide-border' && !secondColor){
  typeCode = `
  letter-spacing: 0;
  background: transparent;
  border: none;
  line-height: 50px;
  color: ${color};
  transition: all 0.35s ease-in;
  }
  .button:hover{
    letter-spacing: 2px;
  }
  .button::after,
  .button::before {
    border: 1px solid rgba(0,0,0,0);
    bottom: 0px;
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 0.35s ease-in-out;
    width: 0;
  }
  .button:hover::after,
  .button:hover::before {
    border-color: ${color};
    transition: width 0.35s ease-in-out;
    width: 100%;
  }
  .button:hover::before {
    bottom: auto;
    top: 0;
    width: 100%;
  }
  `
}
if(type === '-hide-border' && secondColor){
  typeCode = `
  letter-spacing: 0;
  background: transparent;
  border: none;
  line-height: 50px;
  color: ${color};
  transition: all 0.35s ease-in;
  }
  .button:hover{
    letter-spacing: 2px;
  }
  .button::after,
  .button::before {
    border: 1px solid rgba(0,0,0,0);
    bottom: 0px;
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 0.35s ease-in-out;
    width: 0;
  }
  .button:hover::after{
    border-color: ${secondColor};
    transition: width 0.35s ease-in-out;
    width: 100%;
  }
  .button:hover::before {
    border-color: ${color};
    transition: width 0.35s ease-in-out;
    width: 100%;
    bottom: auto;
    top: 0;
  }
  `
}

if(type === '-surround-border-hover' && !secondColor){
  typeCode = `
  position: relative;
  color: ${colorText};
  background: linear-gradient(10deg, ${lighten}, ${darken});
  border: none;
  margin: auto 40px;
  transition: all 0.35s ease-in;
  }
  .button::before{
    content: "";
    border-radius: inherit;
    width: 0;
    height: 0;
    border: 5px solid ${color};
    border-color: $val;
    box-shadow: 0 0 60px ${lighten};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
    z-index: -1;
  }
  .button:hover::before{
    opacity: 1;
    width: 115%;
    height: 130%;
  }
  `
}
if(type === '-surround-border-hover' && secondColor){
  typeCode = `
  position: relative;
  color: ${colorText};
  background: linear-gradient(10deg, ${lighten}, ${darken});
  border: none;
  margin: auto 40px;
  transition: all 0.35s ease-in;
  }
  .button::before{
    content: "";
    border-radius: inherit;
    width: 0;
    height: 0;
    border: 5px solid ${secondColor};
    border-color: $val;
    box-shadow: 0 0 60px ${secondColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
    z-index: -1;
  }
  .button:hover::before{
    opacity: 1;
    width: 115%;
    height: 130%;
  }
  `
}
if(type === '-pulse' && !secondColor){
  typeCode = `
  color: ${colorText};
  position: relative;
  background: transparent;
  border: none;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background: linear-gradient(10deg,${lighten},${darken});
    box-shadow: 0 0 60px ${lighten};
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  `
}
if(type === '-pulse' && secondColor){
  typeCode = `
  color: ${colorText};
  position: relative;
  background: transparent;
  border: none;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background: linear-gradient(10deg,${lighten},${secondColor});
    box-shadow: 0 0 60px ${lighten};
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  `
}
if(type === '-pulse-fast' && !secondColor){
  typeCode = `
  color: ${colorText};
  position: relative;
  background: transparent;
  border: none;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background: linear-gradient(10deg,${lighten},${darken});
    box-shadow: 0 0 60px ${lighten};
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: pulse 1.5s infinite;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background: linear-gradient(10deg,${lighten},${darken});
    box-shadow: 0 0 60px ${lighten};
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: pulse 1.5s infinite;
    animation-delay: 0.75s;
  }
  @keyframes pulse {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  `
}
if(type === '-pulse-fast' && secondColor){
  typeCode = `
  color: ${colorText};
  position: relative;
  background: transparent;
  border: none;
  }
  .button::before{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background: linear-gradient(10deg,${lighten},${secondColor});
    box-shadow: 0 0 60px ${lighten};
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: pulse 1.5s infinite;
  }
  .button::after{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    border-radius: inherit;
    background: linear-gradient(10deg,${lighten},${secondColor});
    box-shadow: 0 0 60px ${lighten};
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: pulse 1.5s infinite;
    animation-delay: 0.75s;
  }
  @keyframes pulse {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  `
}
  return (
    <div>
        <div className="code-gen">{beginCode + sizeCode + radiusCode + typeCode}</div>
        <button className="btn btn-rect-3 btn-round-4-top btn-grad color-lightgreen-neongreen" onClick={() => copyToClipboard(`${beginCode} ${sizeCode} ${radiusCode} ${typeCode}`)}>Copy</button>
    </div>
  )
}

export default Generator
