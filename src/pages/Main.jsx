import React from 'react'
import ButtonChanger from '../components/ButtonChanger'
import '../styles/Main.scss'

const Main = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-img"></div>
        <h1 className="hero-title">NeoGrad - css library for your buttons</h1>
        <div className="hero-buttons">
          <button className="btn btn-rect-6 btn-round-4 btn-neograd-r color-blue">Get started</button>
          <button className="btn btn-rect-6 btn-round-4 btn-neograd color-violet">Github</button>
        </div>
      </section>
      <section className="info">
          <h1 className="section-title">Change your buttons just with class name</h1>
          <ButtonChanger />
      </section>

      <section className="builder">

      </section>

      <section className="example">

      </section>

    </main>
  )
}

export default Main
