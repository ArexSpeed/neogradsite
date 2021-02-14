import React, {useState, useEffect} from 'react'
import {rectSizes, longRectSizes, squareSizes, circleSizes, ldColors} from './gData'

const Generator = ({shape, size, radiusSize, radiusType, type, color, secondColor}) => {

  const [copySuccess, setCopySuccess] = useState('');
  const copyToClipboard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  let beginCode = `.button {`
  let sizeCode;
  let radiusCode;
  let typeCode;

  //change color text in types
  const colorText = color === '#202124' || color === '#000000' || 
  color === '#3c4043' || color === '#2c2c2c' || color === '#a52a2a' || color === '#442424' ? '#fff' : '#000';

  const [lighten, setLighten] = useState('')
  const [darken, setDarken] = useState('')
  //lighten, darken for gradient background
  useEffect(() => {
    ldColors.filter(item => item.base === color).map(item => setLighten(item.lighten))
    ldColors.filter(item => item.base === color).map(item => setDarken(item.darken))
    
  }, [color])

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



  return (
    <div>
        <div className="code-gen">{beginCode + sizeCode + radiusCode + typeCode}</div>
        <button onClick={() => copyToClipboard(`${beginCode} ${sizeCode} ${radiusCode} ${typeCode}`)}>Copy</button>
    </div>
  )
}

export default Generator
