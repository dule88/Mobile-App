import React from 'react'

const Footer = () => {
  return (
    <>
         <footer>
            <article className="container">
                <h3>
                    <a className="logo" href="index.html"><i className="fa-solid fa-mobile-screen-button"></i>Mobile Shop</a>
                </h3>
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
                <div className="icons">
                    <span><a href=""><i className="fab fa-facebook-square"></i></a></span>
                    <span><a href=""><i className="fab fa-instagram"></i></a></span>
                    <span><a href=""><i className="fab fa-twitter"></i></a></span>
                    <span><a href=""><i className="fab fa-pinterest"></i></a></span>
                </div>
            </article>
            <article>
                <p>&copy; Mobile Shop 2023.</p>
            </article>
        </footer>
    </>
  )
}

export default Footer;