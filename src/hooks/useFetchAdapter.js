import useFetch from './useFetch';

function useFetchAdapter({ url, adapter }) {
  const { loaded, data, error } = useFetch(url);
  if (loaded && !error) return { loaded, data: adapter(data), error };
  return { loaded, data, error };
}

export default useFetchAdapter;
