import { useNavigate, useParams } from 'react-router-dom';

import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const DetalheDePessoas: React.FC = () => {
    //
    const { id = 'nova'} = useParams<'id'>();

    const navigate = useNavigate();

    const handleDelete = () => {
        console.log('Delete');
    };

    const handleSave = () => {
        console.log('Save');
    };

    return (
        <LayoutBaseDePagina
            titulo='Detalhe de pessoas'
            barraDeFerramentas={
                <FerramentasDeDetalhe 
                    mostrarBotaoSalvarEFechar
                    textoBotaoNovo= 'Nova'
                    //somente aparece se o id for diferente de' nova'
                    mostrarBotaoApagar= {id !== 'nova'} 
                    mostrarBotaoNovo= {id !== 'nova'}

                    aoClicarEmSalvarEFechar={handleSave}
                    aoClicarEmSalvar= {handleSave}
                    aoClicarEmApagar={handleDelete}
                    aoClicarEmVoltar= {() => navigate('/pessoas')}
                    aoClicarEmNovo= {() => navigate('/pessoas/detalhe/nova')}
                />
            }
        >
            <p>Detalhe de Pessoa {id}</p>
        </LayoutBaseDePagina>
       
    );
};