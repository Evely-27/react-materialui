//  responsavel pelo fexamento do menu lateral = drawer
import { createContext, useCallback, useContext, useState } from 'react';

// interface para definir as opções do drawer para navegação

interface IDrawerOption {
    icon: string;
    path: string;
    label: string;
}

// interface para definir propriedades compartilhadas pelo context
interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: ( newDrawerOptions: IDrawerOption[]) => void;
}
// interface de propriedade para utilizar o children
interface IDrawerProviderProps {
    children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

// 
export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

// export para fechar/abrir drawer
export const DrawerProvider:React.FC<IDrawerProviderProps> = ({children}) => {
    // menu-lateral iniciar fechado em telar menor que sm.
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const [drawerOptions,setDrawerOptions] = useState<IDrawerOption[]>([]);

    //useCallback =  armazena outra funções, que seão exextdas quando [] houver alteração
    // o aqui negamos o valor atual, ou seja, ao dar o toggle, se tiver falso NEGAMOS ele e fica true(aberto))
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);
 

    const handleSetDrawerOptions = useCallback(( newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};