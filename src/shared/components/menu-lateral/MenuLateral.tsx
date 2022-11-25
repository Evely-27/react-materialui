import { Avatar, Drawer, useTheme, Divider, List, ListItemButton,ListItemIcon, ListItemText, Icon, useMediaQuery} from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../../contexts';

// componente para indenpendencia da navegação
// to = nome da rota
interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;

}

const ListItemLink: React.FC<IListItemLinkProps>= ({to, icon, label, onClick }) => {
    const navigate = useNavigate();
    /* função para navegar para outra tela
    ?. = serve para verificar se é undefined, se sim, não fazer nada.
    */
    // confirgurações para deixar selecionada o caminho em que está.
    const resolvePath = useResolvedPath(to);
    const match= useMatch({path: resolvePath.pathname, end: false});

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick} >
            <ListItemIcon>
                <Icon>{icon}</Icon>
                <ListItemText primary={label} sx={{paddingLeft: 2 }} />
            </ListItemIcon>               
        </ListItemButton>
    );
};

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

    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();

    //const para mudar tema.
    const { toggleTheme} = useAppThemeContext();

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
                        <List component='nav' >
                            {drawerOptions.map(drawerOptions => (
                                <ListItemLink 
                                    key={drawerOptions.path}
                                    icon={drawerOptions.icon}
                                    to={drawerOptions.path}
                                    label={drawerOptions.label}
                                    onClick={smDown ?toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box>

                    <Box>
                        {/* lista da navegação */}
                        <List component='nav'>
                            <ListItemButton  onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>dark_mode</Icon>
                                    <ListItemText primary='Alternar Tema' sx={{paddingLeft: 2 }} />
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