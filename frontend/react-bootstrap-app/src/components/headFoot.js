import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/styles.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HeadFoot = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img
                    alt=""
                    src="./images/android-chrome-192x192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    /> */}
                    <Navbar.Text>
                        Ocularity
                    </Navbar.Text>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default HeadFoot