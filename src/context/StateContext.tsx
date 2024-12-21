import React, { createContext, useMemo } from 'react';
import { DataType } from '../types/dataType';
import { useStateContext } from './useStateContex';

// Define the type for your data
type JdataType = {
  data: DataType[];
};

type StateContextDataType = {
  jdata: JdataType | undefined; // Allow jdata to be undefined
  setJdata: React.Dispatch<React.SetStateAction<JdataType | undefined>>; // Adjust setter to allow undefined
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
};

export const StateContext = createContext<StateContextDataType | undefined>(undefined);

interface StateContextProviderProps {
  children: React.ReactNode;
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({ children }) => {
  const {
    jdata, setJdata,
    genre, setGenre
  } = useStateContext(); // initialize state

  const data = useMemo(
    () => ({
      jdata,
      setJdata,
      genre, setGenre
    }),
    [jdata, setJdata, genre, setGenre]
  );

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default StateContextProvider;
