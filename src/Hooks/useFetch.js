import { useState, useEffect } from "react";

/**
 * @param {string} url
 * @param {RequestInit?} options
 * @param {()=>any} setfetchDataObject
 */
const fetchData = async (url, setFetchDataObject, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      return setFetchDataObject({
        error: response.statusText,
        data: null,
        loading: false,
      });
    }

    const data = await response.json();

    return setFetchDataObject({
      error: null,
      data,
      loading: false,
    });
  } catch (err) {
    return setFetchDataObject({
      error: err.message,
      data: null,
      loading: false,
    });
  }
};

/**
 * @param {string} url
 * @param {RequestInit?} options
 * @returns {{
 *    data: any;
 *    error: string;
 *    loading: boolean;
 * }}
 * @description This custom hook allows you to fetch data from a given URL and returns React states to manage the data
 */
const useFetch = (url, options = {}) => {
  const [fetchDataObject, setFetchDataObject] = useState({
    error: null,
    loading: true,
    data: null,
  });

  useEffect(() => {
    setTimeout(() => {
      fetchData(url, setFetchDataObject, options);
    }, 2000);
  }, [url, options]);

  return fetchDataObject;
};

export default useFetch;
