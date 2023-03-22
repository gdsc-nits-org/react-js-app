import { useState, useEffect, useRef } from "react";
import { fetchData } from "./common";

/**
 * @returns {[{error: string; loading: boolean; data: any}, (url: string, options?: RequestInit) => void]}
 * @description This custom hook allows you to fetch data from a given URL and returns React states to manage the data and a function to fetch the data when required. This function defer the fetching when necessary. This hooks doesn't work for Strict Mode
 * @example
 * const Component = () => {
 *    const [fetchData, fetchFunc] = useFetchOnAction();
 *
 *    const handleClick = () => {
 *      fetchFunc("/db/demo.json", {method: "GET"})
 *    }
 *
 *    return (
 *        <main>
 *            <div>{data}</div>
 *            <button onClick={handleClick}>Click to Fetch</button>
 *        </main>
 *    );
 * }
 */
const useFetchOnAction = () => {
  const [fetchDataObject, setFetchDataObject] = useState({
    error: null,
    loading: false,
    data: null,
  });
  const [urlObj, setUrlObj] = useState({ url: "", options: {} });

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      fetchData(urlObj.url, setFetchDataObject, urlObj.options);
    } else {
      isMounted.current = true;
    }
  }, [urlObj]);

  const fetchFunc = (url, options = {}) => {
    setFetchDataObject((prevState) => ({ ...prevState, loading: true }));
    setUrlObj({ url, options });
  };

  return [fetchDataObject, fetchFunc];
};

export default useFetchOnAction;
