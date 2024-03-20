import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PopularEvents from "./PopularEvents";
import Heading from "./Heading";
import TopEvents from "./TopEvents";

function MainPage(props) {
    return (
        <>
            <Header />
            <Heading title="POPULAR EVENTS" />
            <PopularEvents props={props.popular} />
            <Heading title="TOP EVENTS" />
            <TopEvents props={props.top} />
            <Footer />   
        </>
    )
}

export default MainPage;