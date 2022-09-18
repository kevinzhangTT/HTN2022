import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InfoDiv from './components/infoDiv';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import HeadFoot from './components/headFoot';

import HeatMapT from './HeatMapTest';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'


function App() {
  const string1 = "Helloworld1"
  return (
    <>
      <HeadFoot />

      <img src='https://i.ibb.co/gv8hKzh/Screenshot-2022-09-18-020640.png' width='100%'></img>

      <InfoDiv></InfoDiv>

      <div className='content-div'>

        <h1 className='text-center'>
          How it works
        </h1>

        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/kJ4rbdz/R006482.jpg" />
          <Card.Body>
            <Card.Title>$10,000 glasses 0_o</Card.Title>
            <Card.Text>
              We used some very expensive and high-tech glasses that have the ability to track the movement of our eyes. This lets us know exactly where your eyes are looking on a screen.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/9WgL96J/IMG-1037.jpg" />
          <Card.Body>
            <Card.Title>8 Boxes (that's eight)</Card.Title>
            <Card.Text>
              We split the viewport into eight boxes to see which area is receiving the most attention from the user with a heatmap.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/bgj0hCF/no3.png" />
          <Card.Body>
            <Card.Title>DATA!!!!!</Card.Title>
            <Card.Text>
              From there, we can draw conclusions about what menu items are popular and what items aren't.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <br/>
      <br/>

      <h1 className='text-center'>
        Heatmap Demo
      </h1>
      
      <div className='heatmap'>
        <HeatMapT/>
      </div>

      <br />
      <br />
      <br />

      </div>

      <HeadFoot />

    </>
  );
}

export default App;
