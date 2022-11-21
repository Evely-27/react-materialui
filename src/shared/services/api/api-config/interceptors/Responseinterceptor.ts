import { AxiosResponse } from 'axios';

// são os dados recebidos do bd, então poderiamos fazer um tratamento padrão para esses retornos.
export const responseInterceptor = ( response : AxiosResponse) => {
    return response;
};