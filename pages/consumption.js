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
        <div className="max-w-6xl mx-auto items-center">
            <h1 className="sm:text-4xl ptb5 text-3xl font-bold sm:text-4xl">
                Grafer over gjennomsnittlig bruk for en familie i Norge:
            </h1>
            <div className="ptb5">
                <ChartDataFromFile />
                <ChartDataFromAPI />
            </div>

        </div>
    );
};

export default Consumption;
