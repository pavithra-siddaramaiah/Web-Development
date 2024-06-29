import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
        .then(res => {
          // console.log(res)
          if(!res.ok){
            throw Error("could not fetch the data from the resources");
          }
         return res.json();
        } )
        .then(data => {
          setData(data);
          setIsPending(false);
  
  
        })
        .catch((err) => {
          // console.log(err.message)
          setIsPending(false);
          setError(err.message);
        })
        }, 1000);
        
      }, []);

      return {data, isPending, error}
}
export default useFetch