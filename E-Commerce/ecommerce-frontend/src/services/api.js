import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:9000/api'

});

// Token ko automatically request ke saath bhejega.
API.interceptors.request.use((config) => {
    // const token = localStorage.getItem('token');

    // // console.log('Interceptor running:', config.url);
    // // console.log('Token found:', !!token);

    // if (!token) {
    //     // config.headers = config.headers || {}
    //     config.headers.Authorization = `Bearer ${token}`
    //     // config.headers.set('Authorization',`Bearer ${token}`)
    // }

    // // console.log('Authorization header added:', !!config.headers.Authorization);

    // return config;

    const token = localStorage.getItem('token');


    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }


    return config;
})
export default API;