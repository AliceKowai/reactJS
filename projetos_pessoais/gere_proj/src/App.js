import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/layouts/header'
import Container from './components/layouts/container';
import Home from './components/pages/home'
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newproject';
import Project from './components/pages/project';
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
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/project:id' element={<Project/>} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
