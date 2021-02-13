import React, {useState,useEffect, useCallback} from 'react'
import {shapes, sizes, radiusSizes, radius, types, colors} from './btnData';

const ButtonChanger = () => {
  const [shape, setShape] = useState('-rect')
  const [size, setSize] = useState('-4')
  const [radiusSize, setRadiusSize] = useState('-4')
  const [radiusType, setRadiusType] = useState('-4')
  const [type, setType] = useState('-neograd')
  const [color, setColor] = useState('-blue')


  const shapeChange = useCallback(() => {
    const randShape = Math.floor(Math.random() * shapes.length);
    const randSize = Math.floor(Math.random() * sizes.length);
    const randRadiusSize = Math.floor(Math.random() * radiusSizes.length);
    const randRadius = Math.floor(Math.random() * radius.length);
    const randType = Math.floor(Math.random() * types.length);
    const randColor = Math.floor(Math.random() * colors.length);

    setShape(shapes[randShape].class);
    setSize(sizes[randSize].class);
    setRadiusSize(radiusSizes[randRadiusSize].class);
    setRadiusType(radius[randRadius].class);
    setType(types[randType].class);
    setColor(colors[randColor].class);

  }, [setShape]);

  useEffect(() => {
    const intervalId = setInterval(() => {

      shapeChange()
    }, 2000);

    return () => clearInterval(intervalId);
  }, [shapeChange]);
  return (
    <div>
      Hello
      <div>Button: {`<button class="btn btn${shape}${size} btn-round${radiusType}${radiusSize} btn${type} color${color}">Button</button>`}</div>
      Shape: {shape}
    </div>
  )
}

export default ButtonChanger
