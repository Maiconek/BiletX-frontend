import React from "react";

function EventCard(props) {
    return (
        <div className="media-element" key={props.id}>
            <img className="scroller-element" src={props.image} alt="logo event"/>
            <p className="scroller-title white">{props.title} - {props.price} zł</p>
        </div>
    )
}

export default EventCard;