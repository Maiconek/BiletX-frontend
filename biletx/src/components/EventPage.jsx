import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function EventPage({events}) {
    const params = useParams()
    const id = params.id
    const event = events.find(event => event.id === id)
    console.log("iD: " + id)
    console.log(event)

    if(!event) {
        return (
            <div>
                <Header/>
                <Footer/>
                <div>Bo</div>
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className="row main">
                <div className="col-lg-6 left">
                    <div className="left-div">
                        <img className="event-img" src={event.image} alt="event"/>
                    </div>
                </div>
                <div className="col-lg-6 right">
                    <div className="right-div">
                        <h1 className="event-name">{event.title}</h1>
                        <h2 className="event-name">10 zł</h2>
                        <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h3 className="event-data">When? 12.01.24</h3>
                        <h3 className="event-data">Where? Legnica</h3>
                    </div>
                </div>
        {/* <div class="map" id="mapContainer">

        </div> */}
        {/* <form method="POST" action="">
            {% csrf_token %}
            <input name="event_id" value="{{ event.id }}" hidden>
            <div class="sbm-but">
                <input type="submit" name="action" class="submit" value="Submit reservation">
            </div>
        </form> */}
            </div>
            <Footer />
        </div>
    )
}

export default EventPage;