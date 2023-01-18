import axios from "axios";
import { ACCESS_TOKEN } from '@env'
type ApiData = {
  type: 'get' | 'post',
  url: string,
  data?: any
}
let baseUrl = 'https://upayments-studycase-api.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;

const Api = {
  fetchProducts() {
    console.log('baseUrl', baseUrl, ACCESS_TOKEN);

    return axios.get(`${baseUrl}/products`);
  }
}
export default Api