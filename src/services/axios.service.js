import axios from "axios";
const axiosService = process.env.REACT_APP_API

export {axiosService}
import baseURL from "../constants/urls";

export const axiosService = axios.create({ baseURL });