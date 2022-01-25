import React, { createContext, useContext, useState } from 'react';

//создание контекста
const DataContext = createContext();

//создание корневого компонента для доступа к его контексту дочерними компонентами
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});

    //функция для добавления данных в state
    const setValues = (values) => {
        setData((prevData) => ({
            ...prevData,
            ...values
        }))
    }

    return (
        <DataContext.Provider value={{ data, setValues }}>{ children }</DataContext.Provider>
    )
};

//функция для получения данных из контекста
export const useData = () => useContext(DataContext)