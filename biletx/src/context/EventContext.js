// import React, { createContext, useEffect } from "react"
// import { useState } from "react"

// export const EventContext = createContext()

// export default function EventProvider({ children }) {
//     const [events, setEvents] = useState([])
//     // const [popularEvents, setPopularEvents] = useState()

//     const fetchEvents = async () => {
//         await fetch("http://127.0.0.1:8000/api/events/")
//                     .then((res) => res.json())
//                     .then((data) => {
//                         console.log(data);
//                         setEvents(data)
//                     });
//     }

//     // useEffect(() => {
//     //     fetchEvents()
//     //     // filterPopularEvents()
//     // }, [])

//     // const filterPopularEvents = async () => {
//     //     const newData = events.filter(event => event.category === "Popular")
//     //     console.log(newData)
//     //     setPopularEvents(newData)
//     // }

//     return (
//         <EventContext.Provider value={{events, fetchEvents}}>
//             {children}
//         </EventContext.Provider>
//     )    
// }

