import axios from "axios";

const api = axios.create({
    baseUrl: 'https://api.jsonbin.io/b/62916da205f31f68b3aacb2a/2'
});

export default api;