import { AxiosError} from 'axios';

// não começa com maiuscual pois é uam função.
export const errorInterceptor = (error: AxiosError) => {
    
    if  ( error.message === 'Network Error' ) {
        return Promise.reject(new Error('Erro de conexão.'));
    }

    if  ( error.response?.status === 401 ) {
        // Do somenthing
        /* se tivesse um erro de autentificação poderiamos tratar , por exemplo, 
        redirecionando para uma outra página para fazer login */
    }

    // estamos retornando o erro de não cair nos ifs anteriores.
    return Promise.reject(error);
};