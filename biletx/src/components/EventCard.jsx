import React from "react";
import { Link } from "react-router-dom";

function EventCard(props) {
    return (
        <div className="media-element" key={props.id}>
            <Link to={`/event/${props.id}`}>
                <img className="scroller-element" src={props.image} alt="logo event"/>
                <p className="scroller-title white">{props.title} - {props.price} zł</p>
            </Link>
        </div>
 
    )
}

export default EventCard;