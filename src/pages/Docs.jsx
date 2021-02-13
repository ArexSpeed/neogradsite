import React from 'react'
import DocsDescription from '../components/DocsDescription'
import Sidebar from '../components/Sidebar'

import '../styles/Docs.scss'

const Docs = () => {
  return (
    <div className="docs">
      <section className="docs-sidebar">
        <Sidebar />
      </section>
      <section className="docs-description">
        <DocsDescription />
      </section>
    </div>
  )
}

export default Docs
