import { Avatar, Drawer, useTheme, Divider, List, ListItemButton,ListItemIcon, ListItemText, Icon, useMediaQuery} from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useDrawerContext } from '../../contexts';
/*
variant= como queremo o formato
variant/permanent = fixo, sempre mostrar
variant/persistent = tipo sanfora, pode mostar ou não, e altera a expansão de outros compomnenetes
variant/temporary = jun~]ao dos 2
<> = fragment => aqui queremos por o menu lateral ao lado dos filhos.
*/

interface IMenuLateralProps{
  children: ReactNode;
}

export const MenuLateral : React.FC<IMenuLateralProps> = ({ children }) => {
    // formatações padrões do Material IU
    const theme   = useTheme();

    // const para definir o menor tamanho da tela para esconder o menu.
    /* breackpoits: down = informa se a tela é menor que a definida, devolve boolean
        keys = informa todos os breackpoints possiveis 
        not = retonr true se não for o breackpoint que definimos 
        only= contrario do not, traz true para o que definimos, só aceita o que definimos
        up = se tiver acima do que definimos , traz true */
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const {isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            {/* if ternário= se smDown for true, mudar paar temporary que usa o open, se não deixar permanat */}
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary': 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    {/* boz de imagem */}
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar
                        // sx = muda propriedades de estilização do componente  Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
                            src='https://avatars.githubusercontent.com/u/97837886?v=4' />
                    </Box>
                    {/* separador */}
                    <Divider />

                    {/* box para botões de navegação ocupando todo o resto disponivel*/}
                    <Box flex={1}>
                        {/* lista da navegação */}
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                    <ListItemText primary='Página Inicial' />
                                </ListItemIcon>
                                  
                            </ListItemButton>
                              
                        </List>
                          
                    </Box>
                </Box>
            </Drawer>
            {/* o 28 é uma medida do Material UI => 1 = 4px 
            para saber em px= 28*4 = 112px
            spacing é o espaço ocupado ele elemento*/}
            <Box height='100vh' marginLeft={smDown ? 0 :theme.spacing(28)}>
                {children}
            </Box>

        </>
    );
};