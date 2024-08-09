import axios from "axios"
import { HOST } from "../utils/constands.js"

export const apiClient=axios.create({
    baseURL:HOST
})