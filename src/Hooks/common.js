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

export { fetchData };
