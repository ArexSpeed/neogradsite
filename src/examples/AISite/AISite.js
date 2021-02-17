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

          <section className="ai-row" style={{ marginTop: "10rem" }}>
            <div className="ai-col-6" md="6" xs="12" style={{ color: "#fff" }}>
              <h2>Let's start AI Course</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus ea nulla nihil nesciunt architecto distinctio amet
                voluptas eos, reiciendis ducimus tempore odio, sed illo
                consequuntur odit adipisci reprehenderit maiores sunt.
              </p>
              <div className="ai-button-group">
                
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                    JOIN
                  </button>
                  <button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                    EXPLORE
                  </button>
              </div>
            </div>
            <div className="ai-col-6">
              <img className="ai-img-fluid" src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg" alt="robot"/>
            </div>
          </section>

        </div>

        <section className="ai-section">
            <h2>Check our AI courses and join to us</h2>

            <div className="ai-row">
            <article className="ai-col-4">
              <div className="card-ai">
                <h4>$50</h4>
                <h3 className="card-title">Basic course</h3>
                <p className="card-text">
                  Learn the basic of AI technology. Everyday you will get new
                  material for learn and show how AI works.
                </p>
                <p className="card-time">Duration: 3 month</p>
                <button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                  CHECK
                </button>
              </div>
            </article>
            <div className="ai-col-4">
              <div className="card-ai">
                <h4>$100</h4>
                <h3 className="card-title">Advance</h3>
                <p className="card-text">
                  You will know the basics and more advanced task with AI. After
                  this course you will can create some of AI function{" "}
                </p>
                <p className="card-time">Duration: 6 month</p>
                <button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                  CHECK
                </button>
              </div>
            </div>
            <article className="ai-col-4">
              <div className="card-ai">
                <h4>$200</h4>
                <h3 className="card-title">Expert</h3>
                <p className="card-text">
                  After this course you will be an expert in AI Technology and
                  you can find job and create new things with incredible
                  knowledge{" "}
                </p>
                <p className="card-time">Duration: 12 month</p>
                <button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                  CHECK
                </button>
              </div>
            </article>
          </div>

        </section>

        <section className="ai-section">
            <h2>Read some articles about AI</h2>
          </section>

          <div className="ai-row">
            <article className="ai-col-6">
            <img className="ai-img-fluid" src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg" alt="robot"/>
            </article>
            <article className="ai-col-6">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque obcaecati quos facere nulla deleniti soluta incidunt,
                natus neque dicta.
              </p>
              <button className="btn btn-rect-4 btn-round-3 btn-slide-left color-neonviolet">
                CHECK
              </button>
            </article>
          </div>

          <div className="ai-row">
            
            <article className="ai-col-6">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque obcaecati quos facere nulla deleniti soluta incidunt,
                natus neque dicta.
              </p>
              <button className="btn btn-rect-4 btn-round-3 btn-slide-left color-neonviolet">
                CHECK
              </button>
            </article>
            <article className="ai-col-6">
            <img className="ai-img-fluid" src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg" alt="robot"/>
            </article>
          </div>

          <div className="ai-row">
            <article className="ai-col-6">
            <img className="ai-img-fluid" src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg" alt="robot"/>
            </article>
            <article className="ai-col-6">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque obcaecati quos facere nulla deleniti soluta incidunt,
                natus neque dicta.
              </p>
              <button className="btn btn-rect-4 btn-round-3 btn-slide-left color-neonviolet">
                CHECK
              </button>
            </article>
          </div>

          <footer className="footer-container">

       <h2 className="mt-3">Subscribe to our newsletter</h2>


            <form>
              <div style={{marginBottom: '20px'}}>
                <input type="email" placeholder="Enter email" className="ai-input" />
              </div>

              <button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue ">
                  JOIN
                </button>
            </form>


          </footer>

          

          
      </div>
    </>
  );
}

export default AISite
