import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PessoasService } from '../../shared/services/api/pessoas/PessoasServices';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { LinearProgress } from '@mui/material';


export const DetalheDePessoas: React.FC = () => {
    //
    const { id = 'nova'} = useParams<'id'>();

    const navigate = useNavigate();

    const [isLoading,setIsLoading] = useState(false);
    const [nome,setNome] = useState('');

    // aqui trazemos os dados do registro que escolhemos
    useEffect(() => {
        // se o id for diferente do nova, vai buscar no bd
        if (id !== 'nova') {
            setIsLoading(true);

            PessoasService.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/pessoas');
                    } else { 
                        setNome(result.nomeCompleto);
                        console.log(result);
                    }
                });
        }
    },[id]); //o useEffet depende desse id, por isso entra na dependencia.

    const handleDelete = (id:number) => {
        if(confirm('Realmente quer apagar?')) {
            PessoasService.deletById(id)
                .then(result => {
                    if(result instanceof Error) {
                        alert(result.message);
                    }else {
                        alert('Registro apagado com sucesso!!');
                        navigate('/pessoas');
                    }
                });
        }
    };

    const handleSave = () => {
        console.log('Save');
    };

    return (
        <LayoutBaseDePagina
            titulo={id === 'nova' ? 'Nova pessoa': nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe 
                    mostrarBotaoSalvarEFechar
                    textoBotaoNovo= 'Nova'
                    //somente aparece se o id for diferente de' nova'
                    mostrarBotaoApagar= {id !== 'nova'} 
                    mostrarBotaoNovo= {id !== 'nova'}

                    aoClicarEmSalvarEFechar={handleSave}
                    aoClicarEmSalvar= {handleSave}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmVoltar= {() => navigate('/pessoas')}
                    aoClicarEmNovo= {() => navigate('/pessoas/detalhe/nova')}
                />
            }
        >

            {isLoading && (
                <LinearProgress variant='indeterminate' />
            )}

            <p>Detalhe de Pessoa {id}</p>
        </LayoutBaseDePagina>
       
    );
};