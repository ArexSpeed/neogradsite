import React from 'react'
import {Link} from 'react-router-dom'
import {shapes, sizes, radiusSizes, radius, types, colors} from './btnData';

const DocsDescription = () => {
  return (
    <div>
      <section className="docs-section" id="getstarted">
        <div style={{ height: "50px" }}></div>
        <h2>Get Started</h2>
        <p>
          NeoGrad is a SCSS library and CSS code generator for creating buttons and
          divs with effects on your website. You can start using NeoGrad by
          downloading the code from github and add this to your projects
          or you can use our{" "}
          <Link to="/build" style={{ color: "#75a7ff" }}>
            Builder
          </Link>{" "}
          You can choose your effect by clicking on the following steps and copy code and add to
          your css file without downloading anything.
          <br /> <br />
          If you choose use NeoGrad by download you can add only one one line
          code for you button in class name. This code look like this: <br />
        </p>
        <div className="btn-code">
          {
            "<button class='btn btn-rect-4 btn-round-2 btn-neograd color-blue'>Button</button>"
          }
        </div>
        <p>The code is created in this easy following steps: </p>
        <div className="btn-code">
          {
           ` class='btn-shape-size shape  btn-radius-size-radiusType of radius btn-type  color-colorName'`
          }
        </div>
        <p>
          All code for NeoGrad is available on this{" "}
          <a href="https://github.com/ArexSpeed/neogradcss" target="_blank" style={{ color: "#75a7ff" }}>
            Github
          </a>{" "}
          you can download this code and start creating{" "}
        </p>
        <p>
          When you want to use NeoGrad without downloading additional files,
          just use the Builder which generates the code for you to copy. You can
          then edit it according to your own ideas
        </p>
        <p>Example of generate code for blue gradient button</p>
        <div className="btn-code">
          {
            ".button {width: 150px; height: 75px; border-radius: 5px; color: #000; background: linear-gradient(to left, hsl(218, 100%, 68%), hsl(218, 100%, 48%)); border: none; transition: all 200ms ease-in-out; } .button:hover { box-shadow: inset -3px 3px 10px hsl(218, 100%, 68%), inset 3px -3px 10px hsl(218, 100%, 48%); }"
          }
        </div>
        <p>
          Check out the next steps of the documentation to see what NeoGrad
          offers.
        </p>
      </section>
      <section className="docs-section" id="shapes">
        <div style={{ height: "50px" }}></div>
        <h2>Shapes</h2>
        <p>NeoGrad has 4 type of shape which you can use. </p>
        <div className="builder-box" style={{ backgroundColor: `#555` }}>
          {shapes.map((shape) => (
            <button className={`btn btn${shape.class}-5 btn-solid color-blue`}>
              {shape.name}
            </button>
          ))}
        </div>
        <p>Chose your shape and add at the beginnig of your code</p>

        <div className="btn-code">
          {"<button class='btn btn-square'>Square</button>"}
          <br />
          {"<button class='btn btn-rect'>Rectangle</button>"} <br />
          {"<button class='btn btn-long-rect'>Long Rectangle</button>"} <br />
          {"<button class='btn btn-circle'>Circle</button>"}
        </div>

        <p>
          For every shape you have to chose size. You can do it by adding suffix
          to your shape code f.e btn-square
          <span style={{ color: "#76ff03" }}>-4</span>
        </p>
        <p>
          <strong>Sizes</strong> to chose are according to this table:
        </p>
        <table className="docs-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Suffix</th>
              <th>Square</th>
              <th>Rect</th>
              <th>Long Rect</th>
              <th>Circle</th>
            </tr>
            <tr>
              <td>Mini</td>
              <td>
                <p style={{ color: "#76ff03" }}>-1</p>
              </td>
              <td>
                w: 30px;
                <p>h: 30px;</p>
              </td>
              <td>
                <p>w: 30px;</p>
                <p>h: 15px;</p>
              </td>
              <td>
                w: 40px;
                <p>h: 10px;</p>
              </td>
              <td>
                w: 30px;
                <p>h: 30px;</p>
              </td>
            </tr>
            <tr>
              <td>Little</td>
              <td style={{ color: "#76ff03" }}>-2</td>
              <td>
                w: 50px;
                <p>h: 50px;</p>
              </td>
              <td>
                w: 50px;
                <p>h: 25px;</p>
              </td>
              <td>
                w: 80px;
                <p>h: 20px;</p>
              </td>
              <td>
                w: 50px;
                <p>h: 50px;</p>
              </td>
            </tr>
            <tr>
              <td>Small</td>
              <td style={{ color: "#76ff03" }}>-3</td>
              <td>
                w: 75px;
                <p>h: 75px;</p>
              </td>
              <td>
                w: 80px;
                <p>h: 40px;</p>
              </td>
              <td>
                w: 120px;
                <p>h: 30px;</p>
              </td>
              <td>
                w: 75px;
                <p>h: 75px;</p>
              </td>
            </tr>
            <tr>
              <td>Medium</td>
              <td style={{ color: "#76ff03" }}>-4</td>
              <td>
                w: 100px;
                <p>h: 100px;</p>
              </td>
              <td>
                w: 100px;
                <p>h: 50px;</p>
              </td>
              <td>
                w: 160px;
                <p>h: 40px;</p>
              </td>
              <td>
                w: 100px;
                <p>h: 100px;</p>
              </td>
            </tr>
            <tr>
              <td>Big</td>
              <td style={{ color: "#76ff03" }}>-5</td>
              <td>
                w: 150px;
                <p>h: 150px;</p>
              </td>
              <td>
                w: 150px;
                <p>h: 75px;</p>
              </td>
              <td>
                w: 200px;
                <p>h: 50px;</p>
              </td>
              <td>
                w: 125px;
                <p>h: 125px;</p>
              </td>
            </tr>
            <tr>
              <td>Large</td>
              <td style={{ color: "#76ff03" }}>-6</td>
              <td>
                w: 200px;
                <p>h: 200px;</p>
              </td>
              <td>
                w: 200px;
                <p>h: 100px;</p>
              </td>
              <td>
                w: 240px;
                <p>h: 60px;</p>
              </td>
              <td>
                w: 150px;
                <p>h: 150px;</p>
              </td>
            </tr>
            <tr>
              <td>Huge</td>
              <td style={{ color: "#76ff03" }}>-7</td>
              <td>
                w: 300px;
                <p>h: 300px;</p>
              </td>
              <td>
                w: 250px;
                <p>h: 125px;</p>
              </td>
              <td>
                w: 320px;
                <p>h: 80px;</p>
              </td>
              <td>
                w: 200px;
                <p>h: 200px;</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section" id="radius">
        <div style={{ height: "50px" }}></div>
        <h2>Radius</h2>
        <p>
          If you want to round your button you can add a rounding size by adding
          the <span style={{ color: "#76ff03" }}>btn-round</span> plus size{" "}
          <span style={{ color: "#76ff03" }}>btn-round-3</span> class
        </p>
        <p>Sizes od round are according to table: </p>
        <table className="docs-table">
          <tbody>
            <tr>
              <th>Size</th>
              <th>class</th>
            </tr>
            {radiusSizes.map(size => (
              <tr>
              <td>{size.name}</td>
              <td style={{ color: "#76ff03" }}>{size.class}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
        <br />
        <p>
          You can also choose a type of radius by adding suffix to your
          btn-round-(size)-<span style={{ color: "#76ff03" }}>type</span>
        </p>
        <p>You can choose one of 11 radius type: </p>
        <div className="builder-box" style={{ backgroundColor: `#555` }}>
          {radius.map((rt) => (
            <button className={`btn btn-rect-3 btn-round-3${rt.class} btn-solid color-blue`}>
              {rt.name}
            </button>
          ))}
        </div>
        <p>Add chosen type to your btn-radius according by suffix in table:</p>
        <table className="docs-table">
          <tbody>
            <tr>
              <th>Size</th>
              <th>class</th>
            </tr>
            {radius.map(type => (
              <tr>
              <td>{type.name}</td>
              <td style={{ color: "#76ff03" }}>{type.class}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </section>

      <section className="docs-section" id="types">
        <div style={{ height: "50px" }}></div>
        <h2>Types</h2>
        <p>The most important stage when you choose effect for your buttons. At this moment are 30 effect to choose.</p>
        <p>You can add effect to your button by adding <span style={{ color: "#76ff03" }}>btn-effect</span> to your class</p>
        <p>Available type of effects: </p>
        <div className="builder-box" style={{ backgroundColor: `#555` }}>
          {types.map((type) => (
            <button className={`btn btn-rect-4 btn-round-3 btn${type.class} color-blue`}>
              {type.name}
            </button>
          ))}
        </div> <br />

        <p>Class name for effect in table: </p>
        <table className="docs-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>class</th>
            </tr>
            {types.map(type => (
              <tr>
              <td>{type.name}</td>
              <td style={{ color: "#76ff03" }}>btn{type.class}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </section>

      <section className="docs-section" id="colors">
        <div style={{ height: "50px" }}></div>
        <h2>Colors</h2>
        <p>Final stage, add colors for your button. Pick from 12 primary colors plus 3 prefix for every which give you 48 colors to
          chose or even more if you want to edit it by yourself</p>
       
        <p>Primary color are: <span style={{ color: "#76ff03" }}>green</span>, <span style={{ color: "#2979ff" }}>blue</span>, <span style={{ color: "#ff1744" }}>red</span>, <span style={{ color: "#ab47bc" }}>violet</span>, <span style={{ color: "#ffeb3b" }}>yellow</span>, <span style={{ color: "#ff7d00" }}>orange</span>, <span style={{ color: "#ec407a" }}>pink</span>, <span style={{ color: "#202124" }}>black</span>, <span style={{ color: "#ffffff" }}>white</span>, <span style={{ color: "#ffd700" }}>gold</span>, <span style={{ color: "#c0c0c0" }}>silver</span>, <span style={{ color: "#a52a2a" }}>brown</span></p>
        <p>The prefix for colors are: light, dark, neon</p>
        <p>That's mean you can choose 4 version of one color for example blue:</p>
        <p><span style={{ color: "#2979ff" }}>blue</span>, <span style={{ color: "#75a7ff" }}>lightblue</span>, <span style={{ color: "#004ecb" }}>darkblue</span>, <span style={{ color: "#45f3ff" }}>neonblue</span>,</p>
        <p>If you want to add color to button just add at the end of class the color name 
           <span style={{ color: "#76ff03" }}> color-green</span></p>
          <div className="btn-code">
          {
            "<button class='btn btn-rect-4 btn-round-2 btn-neograd color-green'>Button</button>"
          }
        </div>
        <p>You can add one or two colors as you need following by: <br />
        <span style={{ color: "#76ff03" }}> color-firstColor</span> <br />
        <span style={{ color: "#76ff03" }}> color-firstColor-secondColor</span>
        </p>
      </section>
    </div>
  );
}

export default DocsDescription
