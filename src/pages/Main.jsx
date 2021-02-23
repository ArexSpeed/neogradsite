import React from 'react'
import {Link} from 'react-router-dom'
import ButtonChanger from '../components/ButtonChanger'
import Examples from '../components/Examples'
import Footer from '../components/Footer'
import banner from '../images/neogradbanner.png'
import '../styles/Main.scss'

const Main = () => {

  return (
    <main>
      <section className="hero">
        <div className="hero-img">
          <img src={banner} alt='NeoGrad' style={{maxWidth: '100%'}} />
        </div>
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
      <video className="main-video" width="956" height="385" src="/video/buildvideo.mp4" autoPlay muted loop/>
      </div>
      <Link to='/build'><button class="btn btn-rect-5 btn-border-move-light color-neonblue">Builder</button></Link>
      </section>

      <section className="example">
        <Examples />
      </section>

      <section className="footer">
        <Footer />
      </section>

    </main>
  )
}

export default Main
