import React, {useState} from 'react'
import DocsDescription from '../components/DocsDescription'
import Sidebar from '../components/Sidebar'

import '../styles/Docs.scss'

const Docs = () => {
  const [bg, setBg] = useState(false)

  const changeBg = () => {
    setBg(!bg)
  }
  return (
    <div className="docs" style={{backgroundColor: `${bg ? '#fff' : '#333'}`, color: `${bg ? '#000' : '#fff'}`}}>
      <section className="docs-sidebar">
        <button className="docs-bgbutton" onClick={changeBg} style={{backgroundColor: `${bg ? '#000' : '#fff'}`}}></button>
        <Sidebar />
      </section>
      <section className="docs-description">
        <DocsDescription />
      </section>
    </div>
  )
}

export default Docs
