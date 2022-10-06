//  responsavel pelo fexamento do menu lateral = drawer

import { createContext, ReactNode, useCallback, useContext, useState } from 'react';



// interface para definir propriedades compartilhadas pelo context
interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}
// interface de propriedade para utilizar o children
interface IDrawerProviderProps {
    children: ReactNode;
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

    //useCallback =  armazena outra funções, que seão exextdas quando [] houver alteração
    // o aqui negamos o valor atual, ou seja, ao dar o toggle, se tiver falso NEGAMOS ele e fica true(aberto))
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    },[]);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};