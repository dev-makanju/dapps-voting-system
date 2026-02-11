import {useContext, createContext} from 'react'

type NavigateContextProps = {
    currentPage: string; //
    navigate: (page: string) => void;
}

export const NavigationContext = createContext<NavigateContextProps | undefined>(undefined)

export const useNavigation = () => {
    const context = useContext(NavigationContext)

    if(!context) {
        throw new Error("useNavigation must be used within a NavigationProvider")
    }

    return context
}