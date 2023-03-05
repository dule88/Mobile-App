import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


import CartContext from '../../contexts/CartContext';



const Navbar = () => {

    // to change burger classes

    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    // toggle burger menu change

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        }
        else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    };

    const {cart} = useContext(CartContext);

  return (
    <>
        <div className='navigation-div'>
            <nav className='burger-nav'>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <ul className='not-burger'>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="products">Products</Link> 
                    </li>
                    <li>
                        <Link to="about">About us</Link> 
                    </li>
                    <li>
                        <Link to="contact">Contact us</Link> 
                    </li> 
                    <li>
                        <Link to="cart">Cart({cart.length})</Link> 
                    </li>
                    <li>
                        <Link to="admin">Admin</Link> 
                    </li>
                </ul>
            </nav>
            <div className={menu_class}>
            <ul className='nav-burger'>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="products">Products</Link> 
                    </li>
                    <li>
                        <Link to="about">About us</Link> 
                    </li>
                    <li>
                        <Link to="contact">Contact us</Link> 
                    </li> 
                    <li>
                        <Link to="cart">Cart({cart.length})</Link> 
                    </li>
                    <li>
                        <Link to="admin">Admin</Link> 
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;