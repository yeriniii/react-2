import { createContext, useState } from "react";
import fakeData from "fakeData.json";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(fakeData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
