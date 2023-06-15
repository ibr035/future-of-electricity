import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useEffect, useState } from "react";


// here we fetch data from the Files 
import data from "../data/providers.json";

const providers = () => {
    const item = data.map((product, index) => (
        <div key={index} className="card-item bg-yellow">
            {product.name !== undefined && <h2 className="h2"> {product.name}</h2>}
            {product.pricingModel !== undefined && <div>PrisModel: {product.pricingModel}</div>}
            {product.monthlyFee !== undefined && <div>Månedlige kostnader: {product.monthlyFee}</div>}
            {product.fixedPrice !== undefined && <div>Fast pris: {product.fixedPrice}</div>}
            {product.fixedPricePeriod !== undefined && <div>Bindingstid: {product.fixedPricePeriod}</div>}
            {product.variablePrice !== undefined && <div>Variabel pris: {product.variablePrice}</div>}
            {product.spotPrice !== undefined && <div>Spot pris: {product.spotPrice}</div>}
        </div>

    ))

    return (

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
            <h1 className="text-l font-bold tracking-tight text-gray-900 sm:text-4xl">Her er de forskjellige leverandørene</h1>
            <ul >
                {console.log(data)}
                <div className="card ">
                    {item}
                </div>


            </ul>
        </div>
    );
}


export default providers;
