import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(productsResult =>setProducts(productsResult))
        .catch(err => console.log(err))
    });

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
        )
        
}


export default ProductsContext;