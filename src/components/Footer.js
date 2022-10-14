import { Container, Row, Col, Navbar } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <div className="foot">
            Bhadoriya
          </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raj-roushan-bhadouriya" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/raj.roushan.505" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/p/CYd4wPrPmpQZISNj2_sFzBbyoLvfEfYkJUuB8Q0/?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer noopener"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
