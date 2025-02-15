import React from "react";
import Hero from "./Hero/heros";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";


const Home = () => {
    return <div className="overflow-hidden">
        <Hero/>
        <WhyChoose/>
        <AnalyticsFeature/>
    </div>

    
}

export default Home