import React, { useContext } from 'react'
import ProductsContext from '../contexts/ProductsContext'
import { Link } from 'react-router-dom'

const Products = () => {
    const {products, setProducts} = useContext(ProductsContext);
  return (
    <>
        <section className="products container">
            <article>
            {products.map(product => {
                return (
                <div key={product.id} className="item">
                    <Link to={`/single/${product.id}`}>
                    <img src={`http://localhost:3000/${product.img}`} alt="" />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    </Link>
                </div>
                )
            })}

            </article>
        </section>
    </>
  )
}

export default Products;