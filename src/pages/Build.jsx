import React from 'react'
import Builder from '../components/Builder'
import Footer from '../components/Footer'
import '../styles/Build.scss'

const Build = () => {
  return (
    <div className="build">
      <div className="build-header">
        <div className="build-header-text">
        Create your button effect in few steps. Click and chose your favorite button in following stages {"->"}
        <p>Shapes - Sizes - Radius - Radius Type - Colors - Second Colors - Types</p> 
        <p>Change the background and see how the buttons will look on your page</p>
        </div>
      </div>
      <div className="build-creator">
        <Builder />
      </div>
      <Footer />
    </div>
  )
}

export default Build
