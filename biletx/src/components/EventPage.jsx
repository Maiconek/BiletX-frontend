import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function EventPage({events}) {
    // const eventId = match.params.title;
    // console.log(eventId)
    // const event = events.find(event => event.title === eventId)
    const params = useParams()
    const title = params.title
    const event = events.find(event => event.title === title)

    if(!event) {
        return (
            <div>
                <Header/>
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
                        <h2 className="event-name">10 zł</h2>
                        <p className="description">
                            {event.description }
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