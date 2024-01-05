
import './App.css'
import {Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Sidebar from './components/Components/sidebar'

function App() {

  return (
    <>
      <Header/>
      <div className='d-flex'>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
