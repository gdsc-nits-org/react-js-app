import { useState, useEffect } from "react";
import { fetchData } from "./common";

/**
 * @param {string} url
 * @param {RequestInit?} options
 * @returns {{
 *    data: any;
 *    error: string;
 *    loading: boolean;
 * }}
 * @description This custom hook allows you to fetch data from a given URL and returns React states to manage the data. This can be used for top level fetching of data.
 * @example
 * const Component = () => {
 *    const {data, error, loading} = useFetch("/db/demo.json", {method: "GET"});
 *
 *    return (
 *        <div>{data}</div>
 *    );
 * }
 */
const useFetch = (url, options = {}) => {
  const [fetchDataObject, setFetchDataObject] = useState({
    error: null,
    loading: true,
    data: null,
  });

  useEffect(() => {
    fetchData(url, setFetchDataObject, options);
  }, [url, options]);

  return fetchDataObject;
};

export default useFetch;
