import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Detail() {
  return (
    <div class="container mt-5">
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Product Detail</Card.Title>
              <Card.Text>
              <Card.Img variant="top" style={{ width: '18rem' }} src="http://askavy.com/demo/img/img-card.jpg" /><br></br>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link class="btn btn-sm btn-outline-primary" to="/shop">Back</Link>
            </Card.Footer>
          </Card>
        </Container>
    </div>
  );
}
function Home() {
  return (
    <div>
      <Detail />
    </div>
  );
}

export default Home;