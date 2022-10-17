import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';


interface IBarraDeFerramentasProps {
    textoDeBusca?: string; 
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) =>void;

    textoBotaoNovo?: string; 
    mostraroBotaoNovo?: boolean;
    aoClicarEmNovo?: () =>void;
}

export const BarraDeFerramentas:React.FC<IBarraDeFerramentasProps> = ({
    textoDeBusca= '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    aoClicarEmNovo,
    mostraroBotaoNovo = true,
    textoBotaoNovo = 'Novo',
}) => {
    const theme = useTheme();

    return (
        // component = vem do material e serve para adquirir propriedade de outros componentes
        <Box 
            gap={1}             // só cm flex, e da uma distancia entre os compnentes/elementos
            marginX={1}         // se distância pelas beiradas pelas laterias 
            padding={1}         // se distância internamente
            paddingX={2}        // se distância internamente pelas laterais
            display= 'flex'     // vai mudar a forma como o layout se comport, padrão row=linha
            alignItems='center' // centralizar tudo
            height={theme.spacing(5)}  // altura do box
            component={Paper}>

            {/* só apacere ao ser pedida */}
            {mostrarInputBusca && (
                <TextField 
                    size='small' // propriedade que deixa menor e responsivo
                    placeholder='Pesquisar...'
                    value={textoDeBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                />
            )}
 

            <Box  
                flex={1} 
                display='flex' 
                justifyContent='end'
            >
                {mostraroBotaoNovo && (
                    <Button
                        color='primary' //cor primaria que definimos
                        disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                        variant='contained'
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >{textoBotaoNovo}</Button>
                )}
            </Box>
        </Box>
    );
};