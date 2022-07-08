import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = (props) => {
    const [productos,setProductos] = useState([]);
    const [menu,setMenu] = useState(false);

    useEffect(() => {
        const getProduct =  async () => {
            const response = await fetch("http://localhost:3001/products/all");
            setProductos(await response.json());
        }
        getProduct();
    }, [])

    const value = {
        productos : [productos],
        menu: [menu, setMenu]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )

}
export default DataContext;