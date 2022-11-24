import { Environment } from '../../../environment';
import { Api } from '../api-config';

// pessoas que vão ser retornadas para a listagem 
interface IListagemPessoa {
    id:number;
    email: string;
    cidadeId: number; // para relacionar uma pessoa que perte4nce a uma cidade especifica 
    nomeCompleto: string;
}
// vai retorna os dados de uma instancia de pessoas, vai ser utlilizada em detalhes
interface IDetalhePessoa {
    id:number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}
// type para ligar a quantidade de pessoas com o registrado no bd
type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}
/* utilizamos o try/catch para tralhabar no temnpo de resposta do bd
getAll deve retorna a lista de pessoas no bs e quanto há nele
*/
const getAll = async (page= 1, filter = ''):Promise<TPessoasComTotalCount | Error> => { 
    try {
        /*busca paginada = vem 1 pagina por padrão , com 10 conteudos no maximo
        buscar dados no back = utilizar nome do atributo no bd mais o operator _like 
        */
        const urlRelativa= `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa); // esse data é o que o que o back end vai responder 

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
                // x-total-count = quantidade total de registro, oferecido pelo /headers/slice, vem como string, então temos que mudar para number
            };
        }
        
        return new Error('Erro ao listar os registros!');
    }catch (error) {
        console.error(error);
        // geralmente no error temos um atributos chamado menssage, que é o que retornamos
        return new Error((error as { message:string}).message || 'Erro ao realizar a consulta!');
    }
};

const getById = async (id:number):Promise<IDetalhePessoa | Error> => {
    try {
        const {data} = await Api.get(`/pessoas/${id}`);

        if (data) {
            return data;
        }
        return new Error('Erro ao consultar o registro.');
    }catch (error) {
        console.log(error);   
        return new Error((error as { message:string}).message || 'Erro ao realizar a consulta do registro!');
    }
};

//(typescript) omit = permit omitir algum atributo que seria necessario, ja que o id ele que gera(bd)
const create = async (dados:Omit<IDetalhePessoa,'id'>):Promise<number | Error> => { 
    try {
        const {data} = await Api.post<IDetalhePessoa>('/pessoas',dados);

        if (data) {
            return data.id; // deve retornar somente o id par mostrar que registrou
        }
        return new Error('Erro ao criar o registro.');
    }catch (error) {
        console.log(error);   
        return new Error((error as { message:string}).message || 'Erro ao criar o registro!');
    }
};

// somente manda a atualização das informações
const updateById = async (id:number,dados: IDetalhePessoa):Promise<void | Error> => { 
    try {
        await Api.put<IDetalhePessoa>(`/pessoas/${id}`,dados);
    }catch (error) {
        console.log(error);   
        return new Error((error as { message:string}).message || 'Erro ao atualizar o registro!');
    }
};

const deletById = async (id:number):Promise<void | Error> => { 
    try {
        await Api.delete<IDetalhePessoa>(`/pessoas/${id}`);
    }catch (error) {
        console.log(error);   
        return new Error((error as { message:string}).message || 'Erro ao deletar o registro!');
    }
};

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deletById
};