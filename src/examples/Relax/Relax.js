import React from 'react'

import './Relax.css';

const Relax = () => {
  return (
    <div className="relax-container">
      <div className="relax-circle"></div>
      <div className="relax-line"></div>
      <div className="relax-textBg">
      <div className="relax-text relax"><h2>RE
        <div>L</div><div>AX</div></h2></div>
      <div className="relax-text focus"><h2>FO
        <div>C</div><div>US</div></h2></div>
      </div>
        <div className="menu-relax">
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-violet">1</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-neonsilver">2</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-darksilver">3</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-silver">4</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-violet">5</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-neonpink">6</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-pink">7</div>
          <div className="btn-relax btn btn-circle-3 btn-shadow-behind color-lightpink">8</div>
        </div>
    </div>
  )
}

export default Relax

