import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.1.6:3000/'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = AsyncStorage.getItem('token');
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjA5ODc2NTQzMjEiLCJzZXgiOiJNYWxlIiwiZW1haWwiOiJob2FuZ2t1bjYxMEBnbWFpbC5jb20iLCJmdWxsTmFtZSI6IkdyZWciLCJhdmF0YXIiOiJodHRwOi8vZHVtbXlpbWFnZS5jb20vMTQ0eDEwMC5wbmcvZmY0NDQ0L2ZmZmZmZiIsImJpcnRoRGF5IjoiNS8xMy8yMDIzIiwiam9pbkRheSI6IjIwMjMtMTEtMjJUMTc6MDA6MDAuMDAwWiIsImlhdCI6MTcxNDg5MTE2NSwiZXhwIjoxNzE3NDgzMTY1fQ.Ppx2G-Pp2kz3RCB9ODRj4Ai8c_7nfQmaS6-7Ylg5-kE"
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;