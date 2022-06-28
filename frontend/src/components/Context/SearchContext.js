import React, {createContext,useState} from 'react'

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [cityCache,setCityCache] = useState(null)
  
    return (
      <SearchContext.Provider value={{cityCache,setCityCache}}>
        {children}
      </SearchContext.Provider>
    )
  };