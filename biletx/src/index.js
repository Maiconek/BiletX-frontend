import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import EventPage from './components/EventPage';
import popularEvents from './data/popular-events';
import { UserProvider } from './context/UserContext';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="*" element={<div style={{color : 'white'}}> Not Found or You do not have permission.</div>}/> */}
      {/* <Route path="/event/:id" element={<EventPage events={events} />} /> */}

    </Routes>  
    </BrowserRouter> 
    </UserProvider> 
    {/* </EventProvider> */}

  </React.StrictMode>
);

