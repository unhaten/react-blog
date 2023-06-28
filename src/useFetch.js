import { useEffect, useState } from "react";

const useFetch = (url) => {
    // ! to use hooks you NEED TO NAME THEM use... (useSomething)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // ! useState -> [value, function]; useState makes our attribute reactive and React watches it and can rerender every time it changes it's state by useState function
    useEffect(() => {
        const abortCont = new AbortController(); //* what for?

        fetch(url, { signal: abortCont.signal }) //* what for?
            .then((response) => {
                if (!response.ok) {
                    throw Error("could not fetch the data from that resource");
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
                    //* what for?
                    //? console.log("fetch aborted");
                } else {
                    setIsPending(false);
                    setError(error.message);
                }
            });

        return () => abortCont.abort(); //* what for?
        // console.log("clean"); //! FIXME: btw it console.log's two times somehow
    }, [url]);

    // ! return all three states in order to use it literally anywhere
    return { data, isPending, error };
};

export default useFetch;
