import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  const cardStyle = {
    color: "white", 
  };
  return (
    <Col size={12} sm={6} md={4}>
      <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" style={cardStyle}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}