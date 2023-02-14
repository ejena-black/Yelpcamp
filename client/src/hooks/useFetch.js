import { useState, useEffect } from "react";


const useFetch = url => {

    // STATES
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

      const abortCont = new AbortController()

      const fetchData = async ()=>{
        const response = await fetch(url)
        const json = await response.json()

        try {
          if(response.ok){
            setData(json);
            setIsPending(false)
            setError(null)
          }
        } catch {
          console.log(json.error)
        }

        // if(!response.ok){
        //   console.log(json.error)
        // }
        // if(response.ok){
        //   setData(json);
        //   setIsPending(false)
        //   setError(null)
        // }
      }

      fetchData()


        // setTimeout(() => {

        //   fetch(url, { signal: abortCont.signal })
        //   .then(res => {
        //     if(!res.ok) {
        //       throw new Error('could not fetch data for this resource');
        //     }
        //     return res.json();
        //   })
        //   .then(data => {
        //     setData(data);
        //     setIsPending(false);
        //     setError(null);
        //   })
        //   .catch(err => {
        //     if(err.name === 'AbortError'){
        //       console.log('fetch Aborted')
        //     }else{
        //       setIsPending(false);
        //       setError(err.message);
        //     }
        //   })

        // }, 500)
      
      return () => abortCont.abort()

    }, [url])

  return { data, isPending, error}
      
}

export default useFetch