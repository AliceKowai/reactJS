import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/layouts/header'
import Container from './components/layouts/container';
import Home from './components/pages/home'
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newproject';
import Projects from './components/pages/projects';
import Footer from './components/layouts/footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Container customClass="minHeight">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/company' element={<Company />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/newproject' element={<NewProject />} />
            <Route exact path='/projects' element={<Projects/>} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
