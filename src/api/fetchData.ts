const API_BASE = "https://api.example.com";
const fetcher = async (url: string, options?: object) => {
  return await (await fetch(`${API_BASE}/${url}`, options)).json();
};
export default fetcher;
