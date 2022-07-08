import React, { useContext, useState, useEffect } from 'react'
import './style.css';
import MGN from "../../images/MGN.jpg";
import 'boxicons';
import  DataContext  from '../../context/DataProvider';
import { askModal, successModal2, errorModal } from "../../utils/infoModals";
import { CartProduct } from './CartProduct';



export const Carrito = () => {

    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [productos, setProductos] = useState([]);
    const [total] = value.total;


    const handleDelete = async (id) => {
        if (await askModal('¿Eliminar producto?', 'Si eliminas el producto, se eliminará de tu carrito.', 'No, mantener producto', 'Sí, eliminar producto')) {
            removeProduct(id);
            successModal2("Producto eliminado!", "El producto fue eliminado correctamente", true);

        }
      }

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
            carrito.forEach((item,index) => {
                if(item.id === id){
                    item.stock = 1;
                    carrito.splice(index,1);
                }
            })
            setCarrito([...carrito])
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
                {carrito.map((producto, key) =>(
                    <CartProduct key={key} product={producto} handleDelete={handleDelete} suma={suma} resta={resta}/>
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
