import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularEvents from "./components/PopularEvents";
import Heading from "./components/Heading";
import TopEvents from "./components/TopEvents";


import popularEvents from "./data/popular-events";
import topEvents from "./data/top-events";



function App() {

  return (
    <div>
      <Header />
      <Heading title="POPULAR EVENTS" />
      <PopularEvents props={popularEvents} />
      <Heading title="TOP EVENTS" />
      <TopEvents props={topEvents} />
      <Footer />   
    </div>
  );
}

export default App;
