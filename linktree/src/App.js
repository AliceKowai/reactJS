import Main from './components/main';
import { useState } from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import FormLink from './components/formlink';

function App() {
  const [links, setLinks] = useState({})
  const [message, setMessage] = useState("")
  const [link, setLink] = useState("")

  function onInputChange(e) {
    setLinks(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
}

function btnSaveClick(e) {
  e.preventDefault()
    setMessage("Salvando... Aguarde...")
    alert(JSON.stringify(links))
    localStorage.setItem("linktree", JSON.stringify(links))
    const link = window.localStorage.getItem("linktree")
    return setLink(JSON.parse(link))
}
  return (
    <div className="App">
      {
        Object.keys(link).length === 0 ? 
      
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p>Preencha todos os campos, por favor</p>
        <FormLink onChange={onInputChange} onClick={btnSaveClick}/>
      </div>
      :
      <div className="08">
        <Main fotoPerfil={link.fotoPerfil} bg={link.bg} nome={link.nome} sobrenome={link.sobrenome} titulo={link.titulo} link1={link.nomeLink1} url1={link.input1} link2={link.nomeLink2} url2={link.input2} link3={link.nomeLink3} url3={link.input3} link4={link.nomeLink4} url4={link.input4} link5={link.nomeLink5} url5={link.input5} />
      </div>
    }
    </div>
  );
}

export default App;
