import React, {useEffect, useState} from 'react'
import { NavigationContext } from './NavigationContext'

type NavigationProviderProps = {
    children: React.ReactNode
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({children}) => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const navigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState(null, "", page);
  }

  useEffect(() => {
    const handlePopstate = () => {
        setCurrentPage(window.location.pathname);
    }

    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate)
  })
  
  return (
    <NavigationContext.Provider value={{ currentPage, navigate}}>
        {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider