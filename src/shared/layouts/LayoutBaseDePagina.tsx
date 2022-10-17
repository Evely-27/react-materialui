import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseProps {
    titulo: string;
    barraDeFerramentas:React.ReactNode;

    children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseProps> = ( { children, titulo, barraDeFerramentas}) => {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const theme = useTheme();
    // const para abrir o Drawer, importar do context
    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box display="flex" alignItems="center" padding={1} gap={1}  height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <Typography 
                    variant={smDown? 'h5': mdDown ? 'h4': 'h3'} // 
                    whiteSpace='nowrap' // serve para não quebrar para nova linha se for texto grande
                    overflow='hidden' // corta o texto para não aparecers
                    textOverflow='ellipsis' // mostar 3 pontos para mostrar que o texto tem mais informações
                >
                    {titulo}   
                </Typography>
            </Box>

            {/* se o barra de ferramentas for chamado aparece, se não, não! */}
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            {/* overflow= permite a div ter um scrow ao ter um tamamho maior que a sua definição,sem precisar para a tela toda */}
            <Box flex={1} overflow='auto'>
                {children}
            </Box>

        </Box>

    );
};