//  responsavel pela troca de temas do sistema

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {ThemeProvider} from '@mui/material';
import {Box} from '@mui/system';
import { DarkTheme, LightTheme } from './../themes';


// interface para definir propriedades compartilhadas pelo context
interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}
// interface de propriedade para utilizar o children
interface IAppThemeProviderProps {
    children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

// serve para usar pegar o tema e alterar entyre dark e light pelo tiggleTheme
export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

// export para mudança de theme entre dark e light
export const AppThemeProvider:React.FC<IAppThemeProviderProps> = ({children}) => {
    const [themeName,setThemeName] = useState<'light' | 'dark'>('light');

    //useCallback =  armazena outra funções, que seão exextdas quando [] houver alteração
    // o if serve para verificar se o valor de ThemeName muda e alterar para os themes.
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light'? 'dark': 'light');
    },[]);

    // serve para quando o themeName sofrer alteração de valor.
    const theme = useMemo(() => {
        if (themeName === 'light')return LightTheme;
        
        return DarkTheme;
    },[themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};