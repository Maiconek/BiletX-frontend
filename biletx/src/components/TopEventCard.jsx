import React from "react";
import { Link } from "react-router-dom";

function TopEventCard(props) {
    return (
        <div className="col-sm mb-3" key={props.id}>
            <Link to={`/event/${props.id}`}>
            <div className="card">
                <img className="card-img" src={props.image} alt="event-preview" />
                <p className="card-title white">{props.title} - {props.price} zł</p>
            </div>
            </Link>
        </div>
    )
}

export default TopEventCard