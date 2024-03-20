import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";

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
                        <img className="event-img" src={event.preview_image} alt="event"/>
                    </div>
                </div>
                <div className="col-lg-6 right">
                    <div className="right-div">
                        <h1 className="event-name">{event.name}</h1>
                        <h2 className="event-name">Price - {event.price} zł</h2>
                        <p className="description">{event.description}</p>
                        <h3 className="event-data">When? {event.date.slice(0, 10)}</h3>
                        <h3 className="event-data">Where? {event.address}</h3>
                        <button type="button" className="btn purple me-3 mt-3">Buy a ticket</button>
                        <Link to="/"><button type="button" className="btn btn-danger mt-3">Go back</button></Link>
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