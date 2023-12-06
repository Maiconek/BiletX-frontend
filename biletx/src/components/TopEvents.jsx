import React from "react";
import TopEventCard from "./TopEventCard";

function TopEvents({props}) {
    return (
        <div class="container-fluid">
            <div class="row">
            {props.map((item) => (
                <TopEventCard title={item.title} image={item.image} price={item.price}/>
            ))}
            </div>
        </div> 
        
    )
}


export default TopEvents