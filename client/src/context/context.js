import { createContext, useState } from "react";

export const DatasetContext = createContext();

export const DatasetProvider = ({ children }) => {
  const [datasetType, setDatasetType] = useState("");

  const [totalRows, setTotalRows] = useState(0);

  const [columns, setColumns] = useState([]);

  return (
    <DatasetContext.Provider
      value={{
        datasetType,
        setDatasetType,

        totalRows,
        setTotalRows,

        columns,
        setColumns,
      }}
    >
      {children}
    </DatasetContext.Provider>
  );
};
