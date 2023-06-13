import dynamic from "next/dynamic";
import React from 'react';
import Navbar from "../components/Navbar";

// We have to import the chart this way because it creates some errors if not.
// You have to do the same if you want to import a component that uses the Rechart library.
const ChartDataFromFile = dynamic(
    () => import("../components/ChartDataFromFile"),
    {
        ssr: false,
    }
);
const ChartDataFromAPI = dynamic(
    () => import("../components/ChartDataFromAPI"),
    {
        ssr: false,
    }
);

const Consumption = () => {
    return (
        <div>
            <h1>The consumption tables:</h1>
            <ChartDataFromFile />
            <ChartDataFromAPI />
        </div>
    );
};

export default Consumption;
