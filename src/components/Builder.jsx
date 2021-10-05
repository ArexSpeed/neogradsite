import React from 'react'

const Builder = () => {
  return (
    <section className="builder">
      <div className="builder__nav">
        <button className="builder__nav-item">
          Buttons
        </button>
      </div>
      <div className="builder__container">
        <div className="builder__settings">
          Setting
        </div>
        <div className="builder__wrapper">
          <div className="builder__aside">
            <div className="builder__wrapper-nav">
              <button className="builder__wrapper-nav-item active">
                Effects
              </button>
            </div>
            <div className="builder__wrapper-container">
              Aside
            </div>
          </div>
          <div className="builder__box">
            <div className="builder__wrapper-nav">
                <button className="builder__wrapper-nav-item active">
                  View
                </button>
                <button className="builder__wrapper-nav-item">
                  CSS
                </button>
                <button className="builder__wrapper-nav-item">
                  SCSS
                </button>
                <button className="builder__wrapper-nav-item">
                  React
                </button>
              </div>
              <div className="builder__wrapper-container">
                Button
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Builder;
