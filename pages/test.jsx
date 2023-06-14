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

}