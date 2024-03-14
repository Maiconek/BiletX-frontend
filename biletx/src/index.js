import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import EventPage from './components/EventPage';
import popularEvents from './data/popular-events';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/event/:title" element={<EventPage events={popularEvents} />} />
    </Routes>  
    </BrowserRouter>  
    {/* </EventProvider> */}

  </React.StrictMode>
);

