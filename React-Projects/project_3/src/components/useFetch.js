import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

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
          if(err.name === "AbortError"){
            console.log("Fetch Aborted")
          }
          else {
            setIsPending(false);
          setError(err.message);
          }
          
        })
        }, 1000);
        
        return () => abortCont.abort();
      }, []);

      return {data, isPending, error}
}
export default useFetch