import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';



export const FerramentasDeDetalhe: React.FC = () => {
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
            <Button
                color='primary' //cor primaria que definimos
                disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                variant='contained'
                startIcon={<Icon>save</Icon>}
            >
                Salvar
            </Button>

            <Button
                color='primary' //cor primaria que definimos
                disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                variant='outlined'
                startIcon={<Icon>save</Icon>}
            >
                Salvar e voltar
            </Button>

            <Button
                color='primary' //cor primaria que definimos
                disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                variant='outlined'
                endIcon={<Icon>delete</Icon>}
            >
                Apagar
            </Button>

            <Button
                color='primary' //cor primaria que definimos
                disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                variant='outlined'
                startIcon={<Icon>add</Icon>}
            >
                Novo
            </Button>
            {/* um divisor */}
            <Divider variant='middle' orientation='vertical' />

            <Button
                color='primary' //cor primaria que definimos
                disableElevation // é um boolean, é uma sombra, como é materia, ser for true ´so colocar nome
                variant='outlined'
                endIcon={<Icon>arrow_back</Icon>}
            >
                Voltar
            </Button>
        </Box>
    );
};