import React, {useState} from "react";
import TopEventCard from "./TopEventCard";
import Input from "./Input";

function TopEvents({props}) {
    const [search, setSearch] = useState('')
    return (
        <>
            <Input onChange={(e) => setSearch(e.target.value)} placeholder="Filter top events"/>
            <div className="container-fluid">
                <div className="row">
                    {props.filter((item) => {
                        return search.toLowerCase() === '' ? 
                        item : 
                        item.title.toLowerCase().includes(search)
                    }).map((item) => (
                        <TopEventCard 
                        key={item.title} 
                        id={item.title} 
                        title={item.title} 
                        image={item.image} 
                        price={item.price}/>
                    ))}
                </div>
            </div> 
        </>
        
    )
}


export default TopEvents