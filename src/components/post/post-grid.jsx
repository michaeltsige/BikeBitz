import { Link } from "react-router-dom";
import "./post.css";
import Posts from "../posts/Posts";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function PostGrid() {
  return (
    <Container>
    <Row xs={1} md={2} >
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Posts />
        </Col>
      ))}
    </Row>
    </Container>
  );
}
