import {useState} from 'react'
import {shapes, sizes, radiusSizes, radius, types, colors} from './btnData';
import Generator from './Generator';


const Builder = () => {
  const [colorBg, setColorBg] = useState('#000')
  const [shapeChose, setShapeChose] = useState('')
  const [sizeChose, setSizeChose] = useState('')
  const [radiusSizeChose, setRadiusSizeChose] = useState('')
  const [radiusTypeChose, setRadiusTypeChose] = useState('')
  const [typeChose, setTypeChose] = useState('')
  const [colorChose, setColorChose] = useState('')
  const [secondColorChose, setSecondColorChose] = useState('')
  const [radiusSizeName, setRadiusSizeName] = useState('') //to generator
  const [radiusTypeName, setRadiusTypeName] = useState('') //to generator
  const [colorName, setColorName] = useState('')
  const [secondColorName, setSecondColorName] = useState('')
  const [copySuccess, setCopySuccess] = useState('Copied button code!');

  const copyToClipboard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied button code!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
    alert(copySuccess)
  };

  const showShapes = shapes.map((shape) => (
    <button
      className={`btn btn${shape.class}-5 btn-solid color-blue`}
      onClick={() => setShapeChose(shape.class)}
    >
      {shape.name}
    </button>
  ));

  const showSizes = sizes.map((size) => (
    <button
      className={`btn btn${shapeChose}${size.class} btn-solid color-blue`}
      onClick={() => setSizeChose(size.class)}
    >
      {size.name}
    </button>
  ));

  const showRadiusSize = radiusSizes.map((rs) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} ${rs.class} btn-solid color-blue`}
      onClick={() => {setRadiusSizeChose(rs.class); setRadiusSizeName(rs.name)}}
    >
      {rs.name}
    </button>
  ));

  const showRadiusType = radius.map((rt) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${rt.class} btn-solid color-blue`}
      onClick={() => {setRadiusTypeChose(rt.class); setRadiusTypeName(rt.name)}}
    >
      {rt.name}
    </button>
  ));


  const showColors = colors.map((color) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${radiusTypeChose} btn-solid color${color.class}`}
      onClick={() => {setColorChose(color.class); setColorName(color.hex)}}
    >
      {color.name}
    </button>
  ));

  const showSecondColors = colors.map((color) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${radiusTypeChose} btn-solid color${colorChose}${color.class}`}
      onClick={() => {setSecondColorChose(color.class); setSecondColorName(color.hex)}}
    >
      {color.name}
    </button>
  ));

  const showTypes = types.map((type) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${radiusTypeChose} btn${type.class} color${colorChose}${secondColorChose}`}
      onClick={() => setTypeChose(type.class)}
    >
      {type.name}
    </button>
  ));


const showButton =   ( 
<button
className={`btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${radiusTypeChose} btn${typeChose} color${colorChose}${secondColorChose}`}
>
Button
</button>)

  return (
    <div>
      <h2 style={{color: '#fff'}}>Change your background:</h2> 
      <input type='color' onChange={(e) => setColorBg(e.target.value)} />


      {typeChose &&
      (
      <>
      <h2 style={{color: '#fff'}}>Your button:</h2> 

      <div className="builder-box" style={{backgroundColor: `${colorBg}` ,display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
      {showButton}
      <div className="builder-code-title">
       Code with neograd library:
       </div>
       <div className="btn-code"> 
       {`<button class="btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${radiusTypeChose} btn${typeChose} color${colorChose}${secondColorChose}">Button</button>`}<br />
       <button className="btn btn-rect-3 btn-round-4-top btn-grad color-lightgreen-neongreen" onClick={() => copyToClipboard(`<button class="btn btn${shapeChose}${sizeChose} ${radiusSizeChose}${radiusTypeChose} btn${typeChose} color${colorChose}${secondColorChose}">Button</button>`)}>Copy</button>
       </div>
       <div className="builder-code-title">
       Clean css code (without download neograd library):
       </div>
       <div className="btn-code"> 
        <Generator shape={shapeChose} size={sizeChose} radiusSize={radiusSizeName} radiusType={radiusTypeName} type={typeChose} color={colorName} secondColor={secondColorName} />
       </div>
      </div>
      </>
      )
      }

      {colorChose &&
      (
      <>
      <h2 style={{color: '#fff'}}>Types</h2> 
      <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
      {showTypes}
      </div>
      </>
      )
      }


      {colorChose && 
      (
      <>
      <h2 style={{color: '#fff'}}>Second color</h2>
      <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
      {showSecondColors}
      </div>
      </>
      )
      }

      {radiusTypeChose && 
      (
      <>
      <h2 style={{color: '#fff'}}>Colors</h2>
      <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
      {showColors}
      </div>
      </>
      )
      }

      {radiusSizeChose && (
      <>
      <h2 style={{color: '#fff'}}>Radius Type</h2>
      <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
      {showRadiusType}
      </div>
      </>
      ) 

      }

      {sizeChose && (
        <>
        <h2 style={{color: '#fff'}}>Radius</h2>
        <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
        {showRadiusSize}
        </div>
        </>
      )
      
      }

      {shapeChose && (
      <>
      <h2 style={{color: '#fff'}}>Sizes</h2>
      <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
      {showSizes}
      </div>
      </>)
      }

      <>
      <h2 style={{color: '#fff'}}>Shapes</h2>
      <div className="builder-box" style={{backgroundColor: `${colorBg}`}}>
      {showShapes}
      </div>
      </>
      
    </div>
  )
}

export default Builder
