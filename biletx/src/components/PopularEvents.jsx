import React, { useEffect } from "react";
import EventCard from "./EventCard";


function PopularEvents({props}) {
    console.log(props)
    return (
        <div className="container-fluid media-scroller snaps-inline">
            {props.map((item) => (
                <EventCard title={item.title} image={item.image} price={item.price}/>
            ))}
        </div> 
    )
}

export default PopularEvents