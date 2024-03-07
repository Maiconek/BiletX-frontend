import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularEvents from "./components/PopularEvents";
import Heading from "./components/Heading";
import TopEvents from "./components/TopEvents";


// import popularEvents from "./data/popular-events";
import topEvents from "./data/top-events";
import { useContext, useEffect, useState } from "react";
import EventContext from "./context/EventContext"



function App() {
  // const { events, fetchEvents } = useContext(EventContext)
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

  const filteredProducts = events
      ? events.filter((product) => product.category === "Popular")
      : events;
    
  console.log(filteredProducts)


  return (
    <>      
        <Header />
        <Heading title="POPULAR EVENTS" />
        <PopularEvents props={filteredProducts} />
        <Heading title="TOP EVENTS" />
        <TopEvents props={topEvents} />
        <Footer />   
    </>
  );
}

export default App;
