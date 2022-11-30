import { useEffect, useMemo, useState } from 'react';
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {  IListagemPessoa, PessoasService } from '../../shared/services/api/pessoas/PessoasServices';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { Environment } from '../../shared/environment';
import { useDebounce } from '../../shared/hooks';


export const ListagemDePessoas:React.FC = ( ) => {
    //hook que nos retorna um array para poder usar mandar o textodebusca para o router
    const [ searchParams, setSearchParams] = useSearchParams();
    const { debounce} = useDebounce();
    const navigate = useNavigate(); //const para editar o registro navegando para outra tela

    const [ rows, setRows] = useState<IListagemPessoa[]>([]);
    // serve para retorna um feedback visual ao usuario
    const  [ isLoading, setIsLoading] = useState(true);
    const  [ totalCount, setTotalCount] = useState(0);

    const busca= useMemo(( )=> {
        return searchParams.get('busca') || '';
    },[searchParams]);

    // const para tratar da pagina na qual estamos
    const pagina= useMemo(( )=> {
        return Number(searchParams.get('pagina') || '1');
    },[searchParams]);

    // consulta para nosso bd
    useEffect(() => {
        setIsLoading(true);

        debounce (() => {
            PessoasService.getAll(pagina,busca)
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        console.log(result);

                        setTotalCount(result.totalCount);
                        setRows(result.data);
                    }
                });
        });
    }, [busca, pagina]);

    /* const para deletar usuario
    confirm é um alert para confirmação
    then para esperar a resposta e trabalhamos se for erro ou sucesso.
    */
    const handleDelete = (id:number) => {
        if(confirm('Realmente quer apagar?')) {
            PessoasService.deletById(id)
                .then(result => {
                    if(result instanceof Error) {
                        alert(result.message);
                    }else {
                        // removemos o resistro da listagem 
                        setRows(oldRows => [
                            ...oldRows.filter(oldRow => oldRow.id !== id),// aqui trazemos tudos os id da velha lista menos o excluido
                        ]);
                        alert('Registro apagado com sucesso!!');
                    }
                });
        }
    };
    return (
        <LayoutBaseDePagina
            titulo='Listagem de pessoas'
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoDeBusca={busca}
                    textoBotaoNovo='Nova'
                    aoMudarTextoDeBusca={texto => setSearchParams({busca: texto,pagina: '1'}, {replace: true})}
                />
            }
        >
            <TableContainer component={Paper} variant="outlined" sx={{m: 1, width:'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* html para mostrar que não a registro ao ter 0 registo no bd e se Não estiver Carregando */}
                    { totalCount === 0 && !isLoading && ( 
                        <caption>{Environment.LISTAGEM_VAZIA}</caption>
                    )}

                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <IconButton sx={{height: '1.5rem'}} onClick= {() => handleDelete(row.id)}>
                                        <Icon>delete</Icon>
                                    </IconButton >
                                    <IconButton sx={{height: '1.5rem'}} onClick = {() => navigate(`/pessoas/detalhe/${row.id}`)} >
                                        <Icon>edit</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* carregamento dos dados,mostrando que esta buscando */}
                    <TableFooter>
                        {isLoading && (
                            <TableRow>
                                <TableCell colSpan={3} >
                                    <LinearProgress variant='indeterminate' />
                                </TableCell>
                            </TableRow>
                        )}
                        {( totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && ( 
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <Pagination 
                                        page={pagina}
                                        count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                                        onChange={(_, newPage) => setSearchParams({busca, pagina:newPage.toString()}, {replace:true})}    
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                       
                    </TableFooter>

                </Table>
            </TableContainer>
        </LayoutBaseDePagina>

    );
};