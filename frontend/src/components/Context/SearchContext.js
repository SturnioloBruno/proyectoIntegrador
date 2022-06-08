import React, {createContext,useState} from 'react'

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [city,setCity] = useState(null)
    const [startDate,setStartDate] = useState(null)
    const [endDate,setEndtDate] = useState(null)
  
    return (
      <SearchContext.Provider value={{city,setCity,
                                      startDate,setStartDate,
                                      endDate,setEndtDate}}>
        {children}
      </SearchContext.Provider>
    )
  };