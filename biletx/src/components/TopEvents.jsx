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
                        item.name.toLowerCase().includes(search)
                    }).map((item) => (
                        <TopEventCard 
                        key={item.id} 
                        id={item.id} 
                        title={item.name} 
                        image={item.preview_image} 
                        price={item.price}/>
                    ))}
                </div>
            </div> 
        </>
        
    )
}


export default TopEvents