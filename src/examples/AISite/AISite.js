import React, {useState} from 'react'

import './AISite.css'

const AISite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="ai-container">
        <div className="hero-container">
          <nav className="ai-navbar">
            <button className="btn btn-rect-5 btn-round-2-double2 btn-neon-reflex color-neonblue">
              AI TECH
            </button>
            
              <ul className="ai-navlist" >
                <li>
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">
                    HOME
                  </button>
                </li>
                <li>
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">
                    SERVICES
                  </button>
                </li>
                <li>
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">
                    PRICING
                  </button>
                </li>
                <li>
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">
                    ABOUT
                  </button>
                </li>
                <li>
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">
                    CONTACT
                  </button>
                </li>
              </ul>

          </nav>

        </div>
      </div>
    </>
  );
}

export default AISite
