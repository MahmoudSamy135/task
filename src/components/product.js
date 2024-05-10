import React from "react";
import './product.css'
import {Link } from "react-router-dom";
// import ProductDetails from "./details";
// import Details from "./details";

// let flag ;
function Product({ id , imgSrc , title, description , price }){
    // flag = id;
    return(
        <>
        <div className="card " id="card">
        <div id="div-img">
            <img src={imgSrc} className="card-img-top" id="img_id" alt={title}/>
        </div>
        <div className="card-body" id="card-body">
            <h5 className="card-title" id="title">{title}</h5>

            <div id="des"><p className="card-text">{description}</p></div>
            <div id="h3"><h3 className="card-title">{price}$</h3></div>
            <Link id="bb" className="btn btn-outline-primary" to={`/details/${id}`}>Details</Link>

            </div> 
        </div>
        </>
    );
}

export default Product;
