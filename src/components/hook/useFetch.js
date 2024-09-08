import { useState, useEffect, useCallback } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async()=>{
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url)

            if (!response.ok) {
                let errorMessage = ''
                switch(response.status){
                  case 404:
                    errorMessage = "404: Recipes not found. Try looking for something else.";
                      break;
                  case 402:
                    errorMessage = "402: Too many requests for today. Try again tomorrow";
                      break;
                  case 401:
                    errorMessage = "401: Invalid API key. Check your API key configuration";
                      break;
                  case 500:
                    errorMessage = "500: Server error. Please try again later.";
                      break;
                  default:
                    errorMessage = `Errore sconosciuto! Status: ${response.status}`;
                      break;
                              
                }
                throw new Error(errorMessage)
              }

              const result = await response.json();
              setData(result)
              
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [url]);

    useEffect(() => {
        if(url) {
            fetchData()
        }
    }, [url, fetchData])

    return {data, loading, error}
}