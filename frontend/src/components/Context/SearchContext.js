import React, {createContext,useState} from 'react'

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [cityCache,setCityCache] = useState(null)
    const [startDateCache,setStartDateCache] = useState(null)
    const [endDateCache,setEndDateCache] = useState(null)
  
    return (
      <SearchContext.Provider value={{cityCache,setCityCache,
                                      startDateCache,setStartDateCache,
                                      endDateCache,setEndDateCache}}>
        {children}
      </SearchContext.Provider>
    )
  };