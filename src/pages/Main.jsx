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
          
          <ButtonChanger />
      </section>

      <section className="builder">
      <h2 className="section-title">Build your button</h2>
      <h3>Just few click with out builder</h3>
        <div className="video">
      <video width="956" height="385" src="/video/buildvideo.mp4" autoPlay muted loop/>
      </div>
      </section>

      <section className="example">

      </section>

    </main>
  )
}

export default Main
