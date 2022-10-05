import { Avatar, Drawer, useTheme, Divider, List, ListItemButton,ListItemIcon, ListItemText, Icon} from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
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

    return (
        <>
            <Drawer variant='permanent'>
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
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>

        </>
    );
};