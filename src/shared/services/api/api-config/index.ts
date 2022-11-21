import axios from 'axios';
import { Enviroment } from '../../../environment';
import { errorInterceptor, responseInterceptor } from './interceptors';

// vamos criar uma instancia do axios

const Api = axios.create({
    baseURL:Enviroment.URL_BASE,
});

// é como vamos tratar as respostas
Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);
export { Api};

// interceptor: meio de campo entre uma chamada e o servidor

