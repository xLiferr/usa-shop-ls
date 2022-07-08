import React, { useContext, useState, useEffect } from 'react'
import './style.css';
import MGN from "../../images/MGN.jpg";
import 'boxicons';
import  DataContext  from '../../context/DataProvider';



export const Carrito = () => {

    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [productos, setProductos] = useState([]);
    const [total] = value.total;

    useEffect(() => {
        const getProduct =  async () => {
            const response = await fetch("http://localhost:3001/products/all");
            setProductos(await response.json());
        }
        getProduct();
    }, [])

    const toogleFalse = () =>{
        setMenu(false);
    }

    const show1 = menu ? 'carritos show' : 'carritos';
    const show2 = menu ? 'carrito show' : 'carrito'; 

    const resta  = (id) =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.stock === 1 ? item.stock = 1: item.stock -= 1;
            }
            setCarrito([...carrito])
        })
    }

    const suma  = (id) =>{
        let cant = 0;
        let xx;
        productos.forEach(x =>{
            if(x.id === id){
                cant = x.stock;
                xx = x;
            }
        })
        carrito.forEach(item =>{
            if(item.id === id){
                if(item.stock < cant){
                    item.stock += 1;
                }
            }
            setCarrito([...carrito])
        })
    }

    const removeProduct = id => {
        if(window.confirm("Quieres suspender el producto?")){
            carrito.forEach((item,index) => {
                if(item.id === id){
                    item.stock = 1;
                    carrito.splice(index,1);
                }
            })
            setCarrito([...carrito])
        }
    }

  return (
    <div className={show1}>
        <div className={show2}>
            <div className='carrito-close' onClick={toogleFalse}>
                <box-icon name = 'x'></box-icon>
            </div>
            <h2> Su carrito</h2>
            <div className='carrito-center'>
                {console.log(carrito)}
            {carrito.length === 0 ? <h2 style={{
                    textAlign: 'center', fontSize: "3rem"
                }}> CARRITO VACÍO </h2>:<>
                {carrito.map((producto) =>(
                    <div className='carrito-item' key={producto.id}>
                        <img src={MGN} alt=''/>
                        <div>
                            <h3> {producto.name} </h3>
                            <p className='price'>${producto.price}</p>
                        </div>
                        <div className='carrito-arrows'>
                            <box-icon name='up-arrow' type = 'solid' onClick = {() => suma(producto.id)}></box-icon> 
                            <p className='cantidad'> {producto.stock}</p>
                            <box-icon name='down-arrow' type = 'solid' onClick = {() => resta(producto.id)}></box-icon> 
                        </div>
                        <div className='remove-item' onClick={() => removeProduct(producto.id)}>
                            <box-icon name='trash'></box-icon>
                        </div>
                    </div>
                ))}
            </>
            }
               
            </div>
            <div className='carrito-footer'>
                <h3>Total: ${total}</h3>
                <button className='btn-pay'> Pagar </button>
            </div>
        </div>
    </div>
  )
}
