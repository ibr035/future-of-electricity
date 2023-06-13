// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import consumption from "../../data/consumption.json";

 /*useEffect(() => {
        const getData = async () =>{
          const query = await fetch('https://future-of-fintech-v2023.vercel.app/api/consumption'); 
          const response = await query.json();
          console.log('Response: ', response)
    
        }
        getData();
    
      }, [])*/

export default function handler(req, res) {
  res.status(200).json(consumption);
}
