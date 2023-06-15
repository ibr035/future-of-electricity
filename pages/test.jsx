import { useEffect, useState } from "react";

export default function Handler() {
  const [showItems, setShowItems] = useState();
  const apiUrl = 'https://future-of-fintech-v2023.vercel.app/api/providers'

  let displayData
  function GetData() {
    fetch(apiUrl)
      .then(res => res.json)
      .then(res => {
        displayData = res.map(function (item) {
          return (
            <p key={index}>{item.from}</p>
          )
        })
        console.log(res)
        setShowItems(displayData)
      })
  }
  useEffect(() => {
    GetData()
  }, [])


const providers = () => {
  const item = displayData.map((product, index) => (
      <div key={index} className="card-item bg-yellow">
          {product.name !== undefined && <h2 className="h2"> {product.name}</h2>}
          {product.pricingModel !== undefined && <div>pricingModel: {product.pricingModel}</div>}
          {product.monthlyFee !== undefined && <div>monthlyFee: {product.monthlyFee}</div>}
          {product.fixedPrice !== undefined && <div>fixedPrice: {product.fixedPrice}</div>}
          {product.fixedPricePeriod !== undefined && <div>fixedPricePeriod: {product.fixedPricePeriod}</div>}
          {product.variablePrice !== undefined && <div>variablePrice: {product.variablePrice}</div>}
          {product.spotPrice !== undefined && <div>spotPrice: {product.spotPrice}</div>}
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

}}