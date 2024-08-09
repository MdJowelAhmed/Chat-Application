import axios from "axios"
import { HOST } from "../utils/constands.js"

const apiClient=axios.create({
    baseURL:HOST
})