import React, {useState} from "react";
import EventCard from "./EventCard";
import Input from "./Input";


function PopularEvents({props}) {
    const [search, setSearch] = useState('')
    return (
        <>
        <Input onChange={(e) => setSearch(e.target.value)} placeholder="Filter popular events"/>
        <div className="container-fluid media-scroller snaps-inline">
            {props.filter((item) => {
                return search.toLowerCase() === '' ? 
                item : 
                item.name.toLowerCase().includes(search)
            }).map((item, index) => (
                <EventCard key={item.id} id={item.id} title={item.name} image={item.preview_image} price={item.price}/>
            ))}
        </div> 
        </>
    )
}

export default PopularEvents