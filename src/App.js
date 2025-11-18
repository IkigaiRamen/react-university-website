import { useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

function App() {
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setNewDate([todayYear])
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center' style={{color: "#dc3545"}}>
              <FontAwesomeIcon icon={faHardHat} size='xl' />
              <span className='mx-2 text-light lh-1 fw-semibold'>
                WELDERCOM
                <br/>
                Centre de soudure
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Link to='/' className='nav-link text-uppercase'>Accueil</Link>
              <Link to='/courses' className='nav-link text-uppercase'>Formations</Link>
              <Link to='/about' className='nav-link text-uppercase'>À propos</Link>
              <Link to='/contact' className='nav-link text-uppercase'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-7'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-md-6 col-lg-5'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'><li className='fw-semibold'>Accueil</li></Link>
                    <Link to="/courses" className='text-decoration-none text-danger'><li className='fw-semibold'>Formations</li></Link>
                    <Link to="/about" className='text-decoration-none text-danger'><li className='fw-semibold'>À propos</li></Link>
                    <Link to="/blog" className='text-decoration-none text-danger'><li className='fw-semibold'>Blog</li></Link>
                    <Link to="/contact" className='text-decoration-none text-danger'><li className='fw-semibold'>Contact</li></Link>
                  </ul>
                </div>

                <div className='col-sm-6 col-lg-7 my-4 my-md-0'>
                  <ul className='footer-social-icons list-unstyled d-flex justify-content-sm-between'>
                    <Link to="/contact"><li><FontAwesomeIcon icon={faSquareFacebook} /></li></Link>
                    <Link to="/contact"><li className='mx-3 mx-sm-0'><FontAwesomeIcon icon={faSquareInstagram} /></li></Link>
                    <Link to="/contact"><li className='me-3 me-sm-0'><FontAwesomeIcon icon={faTiktok} /></li></Link>
                    <Link to="/contact"><li><FontAwesomeIcon icon={faYoutube} /></li></Link>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <ul className='list-unstyled mb-0'>
                <li><p>Adresse : 14 Rue de Pologne, Bab Saadoun, Tunis</p></li>
                <li><p>Téléphone : <a href="tel:+21636147547" className='text-dark'>+216 36 147 547</a></p></li>
                <li><p>Mobile : <a href="tel:+21658108576" className='text-dark'>+216 58 108 576</a></p></li>
                <li><p>Email : <a href="mailto:contact@weldercom.net" className='text-dark'>contact@weldercom.net</a></p></li>
                <li><p>Web : <a href="http://www.weldercom.net" className='text-dark' target="_blank" rel="noopener noreferrer">www.weldercom.net</a></p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>&copy; {newDate} WELDERCOM / Réalisé par <Link to='https://www.ionutcora.com/' style={{textDecoration: 'none', color: '#000'}} target="_blank">Ionut Cora</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
