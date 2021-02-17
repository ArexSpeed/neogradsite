import React, {useState} from 'react'
import { Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Row, Col, ButtonGroup, Button, Form} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AISite.css'

const AISite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="ai-container">
        <Container className="hero-container p-4">
          <Navbar expand="md">
            <NavbarBrand
              href="/"
              className="btn btn-rect-5 btn-round-2-double2 btn-neon-reflex color-neonblue"
            >
              AI TECH
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/"
                    className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite"
                  >
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem light>
                  <NavLink
                    href="/"
                    className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite"
                  >
                    SERVICES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite"
                  >
                    PRICING
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite"
                  >
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/"
                    className="btn btn-rect-5 btn-round-2-double2 btn-hide-border color-neonwhite"
                  >
                    CONTACT
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Row style={{ marginTop: "10rem" }}>
            <Col md="6" xs="12" style={{ color: "#fff" }}>
              <h2>Let's AI Course</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus ea nulla nihil nesciunt architecto distinctio amet
                voluptas eos, reiciendis ducimus tempore odio, sed illo
                consequuntur odit adipisci reprehenderit maiores sunt.
              </p>
              <Row className="d-flex justify-content-center">
                <ButtonGroup>
                  <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                    JOIN
                  </Button>
                  <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                    EXPLORE
                  </Button>
                </ButtonGroup>
              </Row>
            </Col>
            <Col md="6" xs="12">
              <img
                src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg"
                alt="robot"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row className="d-flex justify-content-center">
            <h2>Check our AI courses and join to us</h2>
          </Row>
          <Row>
            <Col md="4" xs="12" className="mt-5 mb-5">
              <div className="card-ai">
                <h4>$50</h4>
                <h3 className="card-title">Basic course</h3>
                <p className="text-center p-2">
                  Learn the basic of AI technology. Everyday you will get new
                  material for learn and show how AI works.
                </p>
                <p className="text-secondary">Duration: 3 month</p>
                <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                  CHECK
                </Button>
              </div>
            </Col>
            <Col md="4" xs="12" className="mt-5">
              <div className="card-ai">
                <h4>$100</h4>
                <h3 className="card-title">Advance</h3>
                <p className="text-center p-2">
                  You will know the basics and more advanced task with AI. After
                  this course you will can create some of AI function{" "}
                </p>
                <p className="text-secondary">Duration: 6 month</p>
                <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                  CHECK
                </Button>
              </div>
            </Col>
            <Col md="4" xs="12" className="mt-5">
              <div className="card-ai">
                <h4>$200</h4>
                <h3 className="card-title">Expert</h3>
                <p className="text-center p-2">
                  After this course you will be an expert in AI Technology and
                  you can find job and create new things with incredible
                  knowledge{" "}
                </p>
                <p className="text-secondary">Duration: 12 month</p>
                <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue">
                  CHECK
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-5">
            <h2>Read some articles about AI</h2>
          </Row>

          <Row className="d-flex justify-content-center mt-5 mb-5">
            <Col md="6" xs="12">
              <img
                src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg"
                alt="robot"
                className="img-fluid"
              />
            </Col>
            <Col md="6" xs="12" className="text-left">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque obcaecati quos facere nulla deleniti soluta incidunt,
                natus neque dicta.
              </p>
              <Button className="btn btn-rect-4 btn-round-3 btn-slide-left color-neonviolet">
                CHECK
              </Button>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-5 mb-5">
            <Col md="6" xs="12" className="text-left">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque obcaecati quos facere nulla deleniti soluta incidunt,
                natus neque dicta.
              </p>
              <Button className="btn btn-rect-4 btn-round-3 btn-slide-left color-neonviolet">
                CHECK
              </Button>
            </Col>
            <Col md="6" xs="12">
              <img
                src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg"
                alt="robot"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mt-5 mb-5">
            <Col md="6" xs="12">
              <img
                src="https://swisscognitive.ch/wp/wp-content/uploads/2019/01/AI-Robots.jpeg"
                alt="robot"
                className="img-fluid"
              />
            </Col>
            <Col md="6" xs="12" className="text-left">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                eaque obcaecati quos facere nulla deleniti soluta incidunt,
                natus neque dicta.
              </p>
              <Button className="btn btn-rect-4 btn-round-3 btn-slide-left color-neonviolet">
                CHECK
              </Button>
            </Col>
          </Row>

          
        </Container>
        <Container className="footer-container mt-5 pb-5">

       <h2 className="mt-3">Subscribe to our newsletter</h2>


            <Form>
              <div className="mb-3" >
                <input type="email" placeholder="Enter email" className="ai-input" />
              </div>

              <Button className="btn btn-rect-5 btn-round-2-double2 btn-neograd color-neonblue ">
                  JOIN
                </Button>
            </Form>

        
          </Container>
      </div>
    </>
  );
}

export default AISite
