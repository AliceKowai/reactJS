import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-bootstrap/dist/react-bootstrap.js'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home.jsx';
import Error from './routes/ErrorPage.jsx';
import Feedback from './routes/Feedback.jsx';
import Calendar from './routes/Calendar.jsx';
import Pdi from './routes/Pdi.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path: "calendar",
        element: <Calendar/>
      },
      {
        path: "pdi",
        element: <Pdi/>
      },
      {
        path: "feedback",
        element: <Feedback/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
