import React from "react";
import styles from "../Styles/Chart.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useEffect, useState } from "react";


// here we fetch data from the Files as the provider API gave 500 error 
import data from "../data/providers.json";


const providerData = data.map((item) => {
    return {
        name: item.name,
        pricing: item.pricing,
        monthlyFee: item.monthlyFee,
        fixedPrice: item.fixedPrice,
        fixedPricePeriod: item.fixedPricePeriod,
    };
});
const providers = () => {
    return (
        <div className={styles.container}>
            < LineChart id="123" width={1000} height={400} data={providerData}>

            </LineChart>
        </div>
    );
}


export default providers;
