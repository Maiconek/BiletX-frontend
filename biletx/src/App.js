import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import { UserProvider } from "./context/UserContext";
import Register from "./components/Register"
import Login from "./components/Login"
import EventPage from "./components/EventPage"




function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    await fetch("http://127.0.0.1:8000/api/events/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setEvents(data)
          });
  }

  const popularEvents = events
      ? events.filter((product) => product.category === "Popular")
      : events;
    
  const topEvents = events
      ? events.filter((product) => product.category === "Top")
      : events;

  
  return (
    <>
      <UserProvider>
        <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage popular={popularEvents} top={topEvents}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<div style={{color : 'white'}}> Not Found or You do not have permission.</div>}/> */}
          <Route path="/event/:id" element={<EventPage events={events} />} />
        </Routes>  
        </BrowserRouter> 
      </UserProvider>       
    </>
  );
}

export default App;
