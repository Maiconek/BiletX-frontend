import React from "react";

function Heading({title}) {
    return (
        <div className="container mt-5 title-container">
            <p className="title white">{title}</p>
        </div>
    )
}

export default Heading;