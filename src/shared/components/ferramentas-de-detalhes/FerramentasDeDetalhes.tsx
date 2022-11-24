import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

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
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar
                    </Typography>
                    
                </Button>
            )}
            {/* Skeleyton  = serve para a mostar que esta sendo carregado alguma informação */}
            { mostrarBotaoSalvarCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}
            {/* usamos o sm e md para quanto estiver nesse tamenho ,não mostrar esses botões */}
            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar e fechar
                    </Typography>
                    
                </Button>
            )}
            { (mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && ( 
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
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Apagar
                    </Typography>
                
                </Button>
            )}
            { mostrarBotaoApagarCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}
            { (mostrarBotaoNovoCarregando && !smDown) && ( 
                <Skeleton width={108} height={61}/>
            )}

            {/* um divisor */}
            {  
                ( 
                    mostrarBotaoVoltar && 
            ( mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
                ) && ( 

                    <Divider variant='middle' orientation='vertical' />
                )
            }

            {(mostrarBotaoVoltar && ! mostrarBotaoVoltarCarregando) && ( 
                <Button
                    color='primary' //cor primaria que definimos
                    disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                    variant='outlined'
                    onClick={aoClicarEmVoltar}
                    endIcon={<Icon>arrow_back</Icon>}
                >
                    <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Voltar
                    </Typography>
                
                </Button>
            )}
            { mostrarBotaoVoltarCarregando && ( 
                <Skeleton width={108} height={61}/>
            )}
            
        </Box>
    );
};