const validateUrl =(url:string) =>{
    if (url.startsWith('/')) {
        return url.slice(1,url.length)
    }
    return url
}
export default validateUrl