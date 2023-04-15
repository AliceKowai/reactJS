import './App.css';
import Header from './components/header';
import Main from './components/main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import FormLink from './components/formlink';

function App() {
  const [bg, setBg] = useState("");
  const [foto, setFoto] = useState("");
  const [link, setLink] = useState([])


  return (
    <div className="App row">
      <div className="card col-sm-6">
        <FormLink/>
      </div>
      <div className="card col-sm-4 mx-5">
        <Header/>
      </div>
    </div>
  );
}

export default App;
