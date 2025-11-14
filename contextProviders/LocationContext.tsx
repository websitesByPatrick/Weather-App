import React, { useState, createContext, ReactNode } from 'react'

type LocationContextType = {
  changeLocation: boolean
  setChangeLocation: React.Dispatch<React.SetStateAction<boolean>>
}

export const LocationContext = createContext<LocationContextType>({
  changeLocation: false,
  setChangeLocation: () => {},
})

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [changeLocation, setChangeLocation] = useState(false)

  return (
    <LocationContext.Provider value={{ changeLocation, setChangeLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

 