import React, { useContext } from 'react'
import './style.css';
import MGN from "../../images/MGN.jpg";
import 'boxicons';
import  DataContext  from '../../context/DataProvider';



export const Carrito = () => {

    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;

    const toogleFalse = () =>{
        setMenu(false);
    }

    const show1 = menu ? 'carritos show' : 'carritos';
    const show2 = menu ? 'carrito show' : 'carrito'; 

  return (
    <div className={show1}>
        <div className={show2}>
            <div className='carrito-close' onClick={toogleFalse}>
                <box-icon name = 'x'></box-icon>
            </div>
            <h2> Su carrito</h2>
            <div className='carrito-center'>
                <div className='carrito-item'>
                    <img src={MGN} alt=''/>
                    <div>
                        <h3> Title </h3>
                        <p className='price'>$100</p>
                    </div>
                    <div>
                        <box-icon name='up-arrow' type = 'solid'></box-icon> 
                        <p className='cantidad'> 1</p>
                        <box-icon name='down-arrow' type = 'solid'></box-icon> 
                    </div>
                    <div className='remove-item'>
                        <box-icon name='trash'></box-icon>
                    </div>
                </div>
            </div>
            <div className='carrito-footer'>
                <h3>Total: $</h3>
                <button className='btn-pay'> Pagar </button>
            </div>
        </div>
    </div>
  )
}
