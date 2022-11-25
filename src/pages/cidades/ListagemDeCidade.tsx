import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const ListagemDeCidade:React.FC = ( ) => {
    //hook que nos retorna um array para poder usar mandar o textodebusca para o router
    const [ searchParams, setSearchParams] = useSearchParams();

    const busca= useMemo(( )=> {
        return searchParams.get('busca') || '';
    },[searchParams]);

    return (
        <LayoutBaseDePagina
            titulo='Listagem de cidades'
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