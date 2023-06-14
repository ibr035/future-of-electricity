// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import consumption from "../../data/consumption.json";

import { useEffect, useState } from "react";

export default function handler() {
  const [showItems, setShowItems] = useState();
  const apiUrl = 'https://future-of-fintech-v2023.vercel.app/api/consumption'

  let displayData
  function getData() {
    fetch(apiUrl)
      .then(res => res.json)
      .then(res => {
        displayData = res.map(function (item) {
          return (
            <p>{item.from}</p>
          )
        })
        console.log(res)
        setShowItems(displayData)
      })
  }
  useEffect(() => {
    getData()
  }, [])

}
/*
export default function handler(req, res) {
  res.status(200).json(consumption);
}
*/