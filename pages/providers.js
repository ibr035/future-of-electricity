import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useEffect, useState } from "react";
//import MyListSubheader from "../components/Filter";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// here we fetch data from the Files 
import data from "../data/providers.json";


const providers = () => {
    const item = data.map((product, index) => (
        <div key={index} className="card-item bg-yellow">
            {product.name !== undefined && <h2 className="h2"> {product.name}</h2>}
            {product.pricingModel !== undefined && <div>Prismodel: {product.pricingModel}</div>}
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
            <div className="section">
                <h2 className="h2">Filtrer etter dine ønsker:</h2>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-native-select">Prismodel</InputLabel>
                    <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                        <option aria-label="None" value="" />
                        <optgroup label="Category 1">
                            <option value={1}>fixed</option>
                            <option value={2}>variable</option>
                            <option value={3}>spot-hourly</option>
                            <option value={4}>spot-monthly</option>
                        </optgroup>

                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 160 }}>
                    <InputLabel htmlFor="grouped-select">Bindingstid</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="Grouping">
                        <MenuItem value={1}>Nei</MenuItem>
                        <MenuItem value={2}>Ja</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <ul >
                <div className="card ">
                    {item}
                </div>
            </ul>


        </div>
    );
}


export default providers;
