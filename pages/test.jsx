import { useEffect, useState } from "react";

const apiUrl = 'https://future-of-fintech-v2023.vercel.app/api/providers'
const cors = require('cors');


/*useEffect(() => {
  const getData = async () => {
    const query = await fetch(apiUrl, { mode: 'no-cors' });
    const response = await query.json;
    console.log(response)
  }
  getData()
}, []);*/

//let displayData
async function fetchData() {
  return await fetch(apiUrl)
    .then(res => {
      res.text()
    })
    .then((data) => {
      (data ? JSON.parse(data) : {})
    })
}

export default function GetData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);
  console.log(data)
  if (!data) return <div >Loading...</div>;
  const displayData = data.map(item => {
    return (
      <p key={index}>{item.from}</p>
    )
  })
  console.log(data)


}



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

}


