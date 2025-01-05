import { apiBaseUrl } from "../constant/api"
import fetcher from "./fetcher"

export const getBookById = (id:string) => {
    return fetcher(`${apiBaseUrl}/books/${id}`)
}
export const getBooks = () => {
    return fetcher(`${apiBaseUrl}/books/search?q=books`)
}