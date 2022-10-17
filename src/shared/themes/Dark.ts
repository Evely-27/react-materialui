// servirá para estiliizar os componentes do materialc UI
// em  background/default é para o fundo da aplicação e o paper para cards
// primary é a cor exibida com mais frequência nas telas e nos componentes
//secondary fornece mais maneiras de acentuar e distinguir seu produto
import {createTheme } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode:  'dark',
        primary: {
            main: purple[700],
            dark: purple[800],
            light: purple[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#9fa8da',
            default: '#424242',
        }
    },

    typography: {
        allVariants:{
            color:'white',
        }
    }
});