import { useEffect, useState } from "react";
import Product from "./product";
import "./productList.css";
function ProductsList(){
    const api_url = "https://dummyjson.com/products";
    const [products, setProducts] = useState([]);
    useEffect(()=>{fetch(api_url).then((res) => res.json()).then((data) => setProducts(data.products) )},[]);
    return(
        <>
        <h2 className="text-center p-3" style={{ color: '#fff' }}>Products</h2>
        <div className="container">
            <div className="row">
                {products.map((product) =>{
                    return (
                        <div className="col-3" key={product.id}>
                            <Product id={product.id} imgSrc={product.images[0] } title={product.title} description={product.description} price={product.price} />
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}
export default ProductsList;