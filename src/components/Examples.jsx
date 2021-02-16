import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Examples.scss'

const Examples = () => {
  return (
    <div className='examples-container'>
      <h2 className="section-title">Check example sites with neograd</h2>
      <div className="examples-container-top">
        <Link to='/example/city'>
        <div className="example-box"></div>
        </Link>
        <Link to='/example/budget'>
        <div className="example-box"></div>
        </Link>
      </div>
      <div className="examples-container-bottom">
        <div className="example-box"></div>
        <div className="example-box"></div>
      </div>
      
    </div>
  )
}

export default Examples
