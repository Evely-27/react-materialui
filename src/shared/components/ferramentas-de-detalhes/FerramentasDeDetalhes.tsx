import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;

}


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',
    
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,
    
    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {
    const theme = useTheme();

    return (
        <Box 
            gap={1}             // só cm flex, e da uma distancia entre os compnentes/elementos
            marginX={1}         // se distância pelas beiradas pelas laterias 
            padding={1}         // se distância internamente
            paddingX={2}        // se distância internamente pelas laterais
            display= 'flex'     // vai mudar a forma como o layout se comport, padrão row=linha
            alignItems='center' // centralizar tudo
            height={theme.spacing(5)}  // altura do box
            component={Paper}
        >
            {/* para  exibir mostrarbotaosalvar   ele não pode estar carregando */}
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='contained'
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >
                    Salvar
                </Button>
            )}
            {/* Skeleyton  = serve para a mostar que esta sendo carregado alguma informação */}
            { mostrarBotaoSalvarCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando ) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                    Salvar e voltar
                </Button>
            )}
            { mostrarBotaoSalvarEFecharCarregando && ( 
                <Skeleton width={180} height={61}/>
            )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmApagar}
                    endIcon={<Icon>delete</Icon>}
                >
                    Apagar
                </Button>
            )}
            { mostrarBotaoApagarCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    {textoBotaoNovo}
                </Button>
            )}
            { mostrarBotaoNovoCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}

            {/* um divisor */}
            <Divider variant='middle' orientation='vertical' />

            {(mostrarBotaoVoltar && ! mostrarBotaoVoltarCarregando) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmVoltar}
                    endIcon={<Icon>arrow_back</Icon>}
                >
                    Voltar
                </Button>
            )}
            { mostrarBotaoVoltarCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}
            
        </Box>
    );
};