import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Examples.scss'
import cityImg from '../examples/images/city.png'
import budgetImg from '../examples/images/budget.png'
import aiImg from '../examples/images/ai.png'
import yogaImg from '../examples/images/yoga.png'

const Examples = () => {
  return (
    <div className='examples-container'>
      <h2 className="section-title">Check example sites with neograd</h2>
      <div className="examples-container-top">
        <Link to='/example/city'>
        <img className="example-box" src={cityImg} alt="city" />
        </Link>
        <Link to='/example/budget'>
        <img className="example-box" src={budgetImg} alt="budget" />
        </Link>
      </div>
      <div className="examples-container-bottom">
      <Link to='/example/relax'>
        <img className="example-box" src={yogaImg} alt="yoga" />
      </Link>
      <Link to='/example/aisite'>
        <img className="example-box" src={aiImg} alt="ai" />
      </Link>
      </div>
      
    </div>
  )
}

export default Examples
