import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularEvents from "./components/PopularEvents";
import Heading from "./components/Heading";
import TopEvents from "./components/TopEvents";
import EventPage from "./components/EventPage";
import { Route, Routes } from "react-router-dom";


import { useEffect, useState } from "react";



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
        <Header />
        <Heading title="POPULAR EVENTS" />
        <PopularEvents props={popularEvents} />
        <Heading title="TOP EVENTS" />
        <TopEvents props={topEvents} />
        <Footer />
        <Routes>
        </Routes>
   
    </>
  );
}

export default App;
