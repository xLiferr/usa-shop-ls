import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';


export const Categorys = () => {
    return(
        <div className="category-bg">
            <div className="category-sections">
                <div className="category-options">
                    <button className="button-category-options">
                        <Link to="" className="info-category-options">
                            <h3> HOMBRE </h3>
                        </Link>
                    </button>
                    <button className="button-category-options">
                        <Link to="" className="info-category-options">
                            <h3> MUJER </h3>
                        </Link>
                    </button>
                    <button className="button-category-options">
                        <Link to="" className="info-category-options">
                            <h3> ACCESORIOS </h3>
                        </Link>
                    </button>
                    <button className="button-category-options">
                        <Link to="" className="info-category-options">
                            <h3> CARTERAS </h3>
                        </Link>
                    </button>
                    <button className="button-category-options">
                        <Link to="" className="info-category-options">
                            <h3> MOCHILAS </h3>
                        </Link>
                    </button>
                </div>
            </div>
        </div>



    );



}