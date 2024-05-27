import { Cookies } from "react-cookie"

const cookies = new Cookies()
const token = cookies.get('autharization')
export const tokenItems = token ? [token]:[];