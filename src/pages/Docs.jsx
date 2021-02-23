import React, {useState} from 'react'
import DocsDescription from '../components/DocsDescription'
import Sidebar from '../components/Sidebar'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/Docs.scss'

const Docs = () => {
  const [bg, setBg] = useState(false)
  const [hide, setHide] = useState(false);
  const changeBg = () => {
    setBg(!bg)
  }
  return (
    <div className="docs" style={{backgroundColor: `${bg ? '#fff' : '#333'}`, color: `${bg ? '#000' : '#fff'}`}}>
      <section className={hide ? 'docs-sidebar' : 'docs-sidebar hide'}>
        <button className="docs-slide" onClick={() => setHide(!hide)}>{hide ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon/> }</button>
        <button className="docs-bgbutton" onClick={changeBg} style={{backgroundColor: `${bg ? '#000' : '#fff'}`}}></button>
        <Sidebar hide={hide} />
      </section>
      <section className={hide ? 'docs-description' : 'docs-description hide'}>
        <DocsDescription />
      </section>
    </div>
  )
}

export default Docs
