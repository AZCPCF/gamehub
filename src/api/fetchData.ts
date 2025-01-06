import validateUrl from "../utils/validateUrl";

const API_BASE = "https://library-api.uidotdev.workers.dev";
const fetcher = async (url: string, options?: object) => {
  return await (await fetch(`${API_BASE}/${validateUrl(url)}`, options)).json();
};
export default fetcher;
