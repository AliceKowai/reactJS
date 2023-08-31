import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import logo from '../../assets/konoha-shape.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonBell from './Buttombell';
import Badge from 'react-bootstrap/Badge';


function NavBar() {
  return (
    <Navbar className='d-flex justify-content-around' bg="light" expand="lg">
      <div className='w-50'>
        <Link className="navbar-brand" to="/">
          <img className='mx-5' src={logo} alt="Konoha" title='Gostoso dlç' width="50" height="50" />
        </Link>
      </div>
      <div>
        <Container className='px-5'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav px-5">
            <Nav className="me-auto">
              <Link className='px-2 nav-link text-danger fw-bold' to="/">Inicio</Link>
              <Link className='px-2 nav-link text-danger fw-bold' to="/calendar">Agenda</Link>
              <Link className='px-2 nav-link text-danger fw-bold' to="/pdi">PDI</Link>
              <Link className='px-2 nav-link text-danger fw-bold' to="/feedback">Feedback</Link>
              <div>
                <ButtonBell />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
}

export default NavBar;