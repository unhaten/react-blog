import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: AbortController.signal })
            .then((response) => {
                if (!response.ok) {
                    throw Error("could not fetch data from file");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("aborted");
                }
                setIsPending(false);
                setError(error.message);
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
