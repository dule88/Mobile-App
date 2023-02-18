import React from 'react'

const Navbar = () => {
  return (
    <>
         <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="products">Products</a>
                </li>
                <li>
                    <a href="about">About us</a>
                </li>
                <li>
                    <a href="contact">Contact us</a>
                </li>
                <li>
                    <a href="cart">Cart</a>
                </li>
                <li>
                    <a href="admin">Admin</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;