import React from "react";
import Product from '../product/Product'
import './Products.css';
const Products = ({props}) => {


    
    return (<section className="products">
    {props.map((item)=>{
        return <Product key={item.id} title={item.title} price={item.price} image={item.image} />;
    }
    )}
    </section>
)}


export default Products;
