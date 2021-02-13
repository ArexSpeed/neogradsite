import {useState} from 'react'
import {shapes, sizes, radiusSizes, radius, types, colors} from './btnData';


const Builder = () => {
  const [text, setText] = useState('Text')
  const [shapeChose, setShapeChose] = useState('')
  const [sizeChose, setSizeChose] = useState('')
  const [radiusSizeChose, setRadiusSizeChose] = useState('')
  const [radiusTypeChose, setRadiusTypeChose] = useState('')
  const [typeChose, setTypeChose] = useState('')
  const [colorChose, setColorChose] = useState('')

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
      className={`btn btn${shapeChose}${sizeChose} btn${rs.class} btn-solid color-blue`}
      onClick={() => setRadiusSizeChose(rs.class)}
    >
      {rs.name}
    </button>
  ));

  const showRadiusType = radius.map((rt) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} btn${radiusSizeChose}${rt.class} btn-solid color-blue`}
      onClick={() => setRadiusTypeChose(rt.class)}
    >
      {rt.name}
    </button>
  ));

  const showTypes = types.map((type) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} btn${radiusSizeChose}${radiusTypeChose} btn${type.class} color-blue`}
      onClick={() => setTypeChose(type.class)}
    >
      {type.name}
    </button>
  ));

  const showColors = colors.map((color) => (
    <button
      className={`btn btn${shapeChose}${sizeChose} btn${radiusSizeChose}${radiusTypeChose} btn${typeChose} color${color.class}`}
      onClick={() => setColorChose(color.class)}
    >
      {color.name}
    </button>
  ));

  return (
    <div>

      {typeChose && 
      <div className="builder-box">
      {showColors}
      </div>
      }

      {radiusTypeChose && 
      <div className="builder-box">
      {showTypes}
      </div>
      }

      {radiusSizeChose && 
      <div className="builder-box">
      {showRadiusType}
      </div>
      }

      {sizeChose && 
      <div className="builder-box">
      {showRadiusSize}
      </div>
      }

      {shapeChose && 
      <div className="builder-box">
      {showSizes}
      </div>
      }

      <div className="builder-box">
      {showShapes}
      </div>
      
    </div>
  )
}

export default Builder
