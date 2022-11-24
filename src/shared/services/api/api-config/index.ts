import axios from 'axios';
import { Environment } from '../../../environment';
import { errorInterceptor, responseInterceptor } from './interceptors';

// vamos criar uma instancia do axios

const Api = axios.create({
    baseURL:Environment.URL_BASE,
});

// é como vamos tratar as respostas
Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);
export { Api};

// Api: meio de campo entre uma requisição de um  front e o banco de dados