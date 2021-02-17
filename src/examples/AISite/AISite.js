import React, {useState} from 'react'
import { Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Row, Col, ButtonGroup, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AISite.css'

const AISite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="ai-container">
        <Container >
        <Navbar expand="md">
        <NavbarBrand href="/" className="btn btn-rect-5 btn-round-2-double2 btn-neon-reflex color-neonblue">AI TECH</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/" className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">HOME</NavLink>
            </NavItem>
            <NavItem light>
              <NavLink href="/" className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">SERVICES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">PRICING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite">CONTACT</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>


          <Row style={{ marginTop: '10rem' }}>
        <Col sm="6" xs="12" style={{ color: '#fff' }}>
          <h2>Let's AI Course</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ea nulla nihil nesciunt architecto distinctio amet voluptas eos, reiciendis ducimus tempore odio, sed illo consequuntur odit adipisci reprehenderit maiores sunt.</p>
          <Row className="d-flex justify-content-center">
          <ButtonGroup>
          <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">JOIN</Button>
          <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">EXPLORE</Button>
          </ButtonGroup>
          </Row>
          </Col>
        <Col sm="6" xs="12">
            <img src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg" alt="robot" className="img-fluid" />
        </Col>
  
      </Row>
            


        </Container>
    </div>
    </>
  )
}

export default AISite
