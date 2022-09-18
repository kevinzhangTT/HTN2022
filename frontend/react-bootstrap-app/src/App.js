import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InfoDiv from './components/infoDiv';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'


function App() {
  const string1 = "Helloworld1"
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./images/android-chrome-192x192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ocularity
          </Navbar.Brand>
        </Container>
      </Navbar>

      <InfoDiv></InfoDiv>

      <div className='content-div'>

        <h1 className='text-center'>
          How it works
        </h1>

        <CardGroup>
        <Card>
          <Card.Img variant="top" src="workspace.jpg/4032px3024" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
        
      </div>

    </>
  );
}

export default App;
