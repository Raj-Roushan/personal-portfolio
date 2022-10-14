import { Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Nav.Link href="https://github.com/Raj-Roushan" target="_blank"><span>See Project</span></Nav.Link>
        </div>
        
      </div>
    </Col>
  )
}
