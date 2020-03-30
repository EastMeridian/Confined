import { useEffect, useState } from 'react';

const fetchData = async (url, callback) => {
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    return callback(null, resultJson);
  } catch (e) {
    return callback(e.toString(), null);
  }
};

function useFetch(inputUrl) {
  const [url, setURL] = useState(inputUrl);
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      fetchData(url, (err, res) => {
        if (err) setError(err);
        else setState(res);
        setLoaded(true);
      });
    }
  }, [url]);

  return {
    loaded,
    data: state,
    error,
    setError,
    setURL,
  };
}

export default useFetch;
