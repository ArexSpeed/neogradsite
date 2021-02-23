import React from 'react'
import {Link} from 'react-router-dom'

const DocsDescription = () => {
  return (
    <div>
      <section className="docs-section" id="getstarted">
      <div style={{height: '50px'}}></div>
        <h2>Get Started</h2>
        <p>
          NeoGrad is a CSS library and CSS code generator for make buttons and divs with effects on your website.
          You could start using NeoGrad with download css minified code from github and add this to your projects or you can 
          use our <Link to='/build' style={{color: "#75a7ff"}}>Builder</Link> when you can choose what effect you want and just copy code and add to your css file without downloading anything.
          <br /> <br />
          If you choose use NeoGrad by download you can add only one one line code for you button in class name.
          This code look like this: <br />
          </p>
          <div className="btn-code"> 
          {"<button class='btn btn-rect-4 btn-round-2 btn-neograd color-blue'>Button</button>"}
          </div>
          <p>The code is created in this easy following steps: </p>
          <p>btn - shape - size shape - radius - size radius - type of radius - type - color</p>
          <p>All code for NeoGrad is available on this <Link to='/' style={{color: "#75a7ff"}}>Github</Link> you can download this code and start creating  </p>
          <p>When you want to use NeoGrad without downloading additional files, just use the Builder which generates the code for you to copy. You can then edit it according to your own ideas</p>
          <p>Example of generate code for blue gradient button</p>
          <div className="btn-code"> 
          {".button {width: 150px; height: 75px; border-radius: 5px; color: #000; background: linear-gradient(to left, hsl(218, 100%, 68%), hsl(218, 100%, 48%)); border: none; transition: all 200ms ease-in-out; } .button:hover { box-shadow: inset -3px 3px 10px hsl(218, 100%, 68%), inset 3px -3px 10px hsl(218, 100%, 48%); }"}
          </div>
          <p>Check out the next steps of the documentation to see what NeoGrad offers.</p>
       
      </section>
      <section className="docs-section" id="shapes">
        <div style={{height: '50px'}}></div>
        <h2>Shapes</h2>
      </section>
      <section className="docs-section" id="sizes">
      <div style={{height: '50px'}}></div>
        <h2>Sizes</h2>
      </section>
      <section className="docs-section" id="radius">
      <div style={{height: '50px'}}></div>
        <h2>Radius</h2>
      </section>
      <section className="docs-section" id="types">
      <div style={{height: '50px'}}></div>
        <h2>Types</h2>
      </section>
      <section className="docs-section" id="colors">
      <div style={{height: '50px'}}></div>
        <h2>Colors</h2>
      </section>
    </div>
  )
}

export default DocsDescription
