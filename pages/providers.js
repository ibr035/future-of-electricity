import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useEffect, useState } from "react";


// here we fetch data from the Files as the provider API gave 500 error 
import data from "../data/providers.json";


const providerData = data.map((item) => {
    return {
        name: item.name,
        pricingModel: item.pricingModel,
        monthlyFee: item.monthlyFee,
        fixedPrice: item.fixedPrice,
        fixedPricePeriod: item.fixedPricePeriod,
        variablePrice: item.variablePrice,
        variablePricePeriod: item.variablePricePeriod,
        spotPrice: item.spotPrice,

    };
});
const providers = () => {
    const item = providerData.map((product, index) => (
        <div key={index} className="card-item">
            <h2 className="h2"> {product.name}</h2>
            <div>pricingModel: {product.pricingModel}</div>
            <div>monthlyFee: {product.monthlyFee}</div>
            <div>fixedPrice: {product.fixedPrice}</div>
            <div>fixedPricePeriod: {product.fixedPricePeriod}</div>
            <div>variablePrice: {product.variablePrice}</div>
            <div>spotPrice: {product.spotPrice}</div>            
        </div>

    ))

    return (


        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
            <h1 className="text-l font-bold tracking-tight text-gray-900 sm:text-4xl">The different providers</h1>
            <ul >
                {console.log(providerData)}
                <div className="card"> 
                    {item}
                </div>


            </ul>
        </div>
    );
}


export default providers;
