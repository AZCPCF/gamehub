const fetcher = async (url: string, options?: object) => {
  return await (await fetch(url, options)).json();
};
export default fetcher;
