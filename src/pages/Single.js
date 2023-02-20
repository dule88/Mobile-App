import React, {useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CartContext from '../contexts/CartContext';
import ProductsContext from '../contexts/ProductsContext';


const Single = () => {
  
  const params = useParams();
  const navigate = useNavigate();  

  const {products, setProducts} = useContext(ProductsContext)
  const {cart, setCart} = useContext(CartContext);

  let product = products.filter(prod => {
    if(prod.id == params.id) {
        return prod;
    }
  })[0];


//   Option menu in <select> element
  let option = [];

  for(let i = 1; i <= product.qty; i++) {
        option.push(<option key={i} value={i}>{i}</option>);
  }


// Creation of Category for products
  let categoryElement = [];
  let catTemp = product.category.split(',');

  catTemp.forEach((element, idx) => {
    if(catTemp.length !==idx + 1) {
        categoryElement.push(<a key={idx} href=".">{element.trim()}, </a>);
    }
    else {
        categoryElement.push(<a key={idx} href=",">{element.trim()}</a>)
    }
  });

//   Adding to Cart

  const addToCart = (event) => {
    event.preventDefault();

    cart.some((item) => {
        return item.id == params.id;
    })

    ?

    cart.filter( item => {
        if(item.id == params.id) {
            return item;
        }
    })[0].qty += Number(event.target.selectQty.value)

    :

    setCart(cart => [...cart, {
        id: params.id,
        name: product.name,
        price: product.price,
        img: product.img,
        qty: Number(event.target.selectQty.value)
    }]);

    navigate('/products');

  }




  return (
    <>
    <section className="single container">
      <h2>Single product</h2>

      <article>
        <div>
          <img src={`http://localhost:3000/${product.img}`} alt="BootsPhoto" />
        </div>
        <div>
          <h3>{product.name}</h3>
          <div className="price">${product.price}</div>
          <p>{product.desc}</p>
          <form onSubmit={addToCart}>
            <label>Quantity</label>
            <select name='selectQty'>
              {option}
            </select>
            <button type='submit'>Order now</button>
          </form>
          <hr />
          <p>Category:
            {categoryElement}
          </p>
          <hr />
          <span>Share:</span>
          <span><a href=""><i className="fab fa-facebook-square"></i></a></span>
          <span><a href=""><i className="fab fa-instagram"></i></a></span>
          <span><a href=""><i className="fab fa-twitter"></i></a></span>
          <span><a href=""><i className="fab fa-pinterest"></i></a></span>
        </div>
      </article>
    </section>
  </>
  )
}

export default Single