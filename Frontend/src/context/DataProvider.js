import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DataContext = createContext({});

export const DataProvider = (props) => {
    const [productos,setProductos] = useState([]);
    const [menu,setMenu] = useState(false);
    const [carrito,setCarrito] = useState([]);

    useEffect(() => {
        const getProduct =  async () => {
            const response = await fetch("http://localhost:3001/products/all");
            setProductos(await response.json());
        }
        getProduct();
    }, [])

    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id;
            })
            setCarrito([...carrito, ...data]);
        }else{
            alert('El producto ya se ha añadido al carrito');
        }
    }

    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])


    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrito : addCarrito,
        carrito : [carrito, setCarrito]
    }

    
    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )

}
export default DataContext;