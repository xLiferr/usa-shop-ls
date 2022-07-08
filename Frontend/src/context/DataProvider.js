import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { askModal, successModal, errorModal } from "../utils/infoModals";

const DataContext = createContext({});

export const DataProvider = (props) => {
    const [productos,setProductos] = useState([]);
    const [menu,setMenu] = useState(false);
    const [carrito,setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

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
            errorModal('Error!', 'Ya ha añadido este producto, puede modificar la cantidad en el carrito.')
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

    useEffect(() =>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item) =>{
                return prev + (item.price * item.stock);
            },0)
            setTotal(res);
        }
        getTotal();
    },[carrito])


    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrito : addCarrito,
        carrito : [carrito, setCarrito],
        total: [total,setTotal]
    }

    
    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )

}
export default DataContext;