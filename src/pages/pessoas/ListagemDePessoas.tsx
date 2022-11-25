import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasServices';


export const ListagemDePessoas:React.FC = ( ) => {
    //hook que nos retorna um array para poder usar mandar o textodebusca para o router
    const [ searchParams, setSearchParams] = useSearchParams();

    const busca= useMemo(( )=> {
        return searchParams.get('busca') || '';
    },[searchParams]);


    useEffect(() => {
        PessoasService.getAll(1,busca)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result);
                }
            });
    }, [busca]);

    return (
        <LayoutBaseDePagina
            titulo='Listagem de pessoas'
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoDeBusca={busca}
                    textoBotaoNovo='Nova'
                    aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
                />
            }
        >
            
        </LayoutBaseDePagina>

    );
};