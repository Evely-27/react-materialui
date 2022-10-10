import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseProps {
    titulo: string;

    children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseProps> = ( { children, titulo}) => {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const theme = useTheme();
    // const para abrir o Drawer, importar do context
    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" padding={1} height={theme.spacing(12)} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <Typography variant='h5'>
                    {titulo}   
                </Typography>
            </Box>

            <Box>
                Barrra de ferramentas
            </Box>

            <Box>
                { children}
            </Box>

        </Box>

    );
};