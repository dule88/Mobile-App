import React, {useContext} from 'react'
import CartContext from '../contexts/CartContext';



const Cart = () => {
  
  const {cart, setCart} = useContext(CartContext); 

  const removeItem = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart([...tempCart]);
  }

  const clearCart = () => {
    setCart([]);
  } 

// Calculating the sum of products in the cart

  let total = cart.reduce((acc, curVal) => {
    return acc + curVal.qty * curVal.price;
  }, 0);



  return (
    <div className='container'>
        {
          cart.length > 0
          ?
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
                return (
                  <tr >
                    <th className='py-3'>{item.id}</th>
                    <td className='py-3'><img src={`http://localhost:3000/${item.img}`} alt="Photo" height="50px" /></td>
                    <td className='py-3'>{item.name}</td>
                    <td className='py-3'>${item.price}</td>
                    <td className='py-3'>{item.qty}</td>
                    <td className='py-3'>${item.price * item.qty}</td>
                    <td className='py-3'><button className="btn btn-danger my-auto" onClick={() => removeItem(idx)}>X</button></td>
                  </tr>
                );
              })}

              <tr className='m-5'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='py-2'>Total Sum: ${total}</td>
                <td></td>
                <td className='py-2'><button className="btn btn-danger my-auto" onClick={() => clearCart()}>Clear cart</button></td>
              </tr>
            </tbody>
          </table>
          :
          <h4>There are no products in the cart.</h4>
        }
    </div>
  )
}

export default Cart;