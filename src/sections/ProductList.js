"use client"

import ProductCard from "@/components/ProductCard";
import { useState } from "react";



const ProductList = ({data}) => {

    const [productList, setProductList] = useState(data)

    return (
        <div className="product-list">
            {
                productList.products.map((item, index)=>(
                    <ProductCard key={index} data={item} />
                ))
            }
        </div>
    )
}

export default ProductList;