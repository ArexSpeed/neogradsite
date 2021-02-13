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
    }, 3000);

    return () => clearInterval(intervalId);
  }, [shapeChange]);
  return (
    <>
    <div className="btn-info-top">
      <h1 className="section-title">Change your buttons just with class name</h1>
      <div className="btn-code">{`<button class="btn btn${shape}-5 ${radiusSize}${radiusType} btn${type} color${color}">Button</button>`}</div>
      </div>
      <div className="btn-show">
      <button className={`btn btn${shape}-5 ${radiusSize}${radiusType} btn${type} color${color}`}>Button</button>
      </div>
    </>
  )
}

export default ButtonChanger
