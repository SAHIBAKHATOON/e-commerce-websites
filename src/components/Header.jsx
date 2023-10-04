import React,{useContext} from 'react'
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/apneck.png';
import { HiOutlineInboxIn} from 'react-icons/hi';
import { VscAccount} from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import { ShopContext } from './Shopcontext';
const Header = () => {
  const location = useLocation();
  const {getTotalCartProducts} = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  return (
    <>
    <header className='header-top-strip p-1 px-4 shadow-md'>
     <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='col-6'>
          <p>The trending outfits at 100% off</p>
        </div>
        <div className='col-6 d-flex justify-content-between'>
        <div>
        <a href='tel:+5948948390'> Call Us +5895845430</a>
        </div>
        <div>
        <Link> <BiPhoneCall className='fs-3 mx-4'/> </Link>
         <Link><AiOutlineMail className='fs-3 mx-4'/></Link>
        </div>
        </div>
      </div>
     </div>
    </header>
    <header className='header-upper sticky-top'>
     <div className='container-xxl'>
      <div className='row'>
      <div className='col-2 m-auto'>
       <Link to='/'><img src={logo} alt='' className='img-fluid logo'/></Link>
   </div>
   <div className='nav-links col-4 d-flex align-items-center justify-content-between text-center'>
    <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>HOME</Link>
    <Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>SHOP</Link>
    <Link to={'blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'}>BLOG</Link>
    <Link to={'about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>ABOUT</Link>
    <Link to={'contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>CONTACT</Link>
   
   </div>
   <div className='nav-links-nav col-3 d-flex align-items-center justify-content-around'>

    <Link to={'Wishlist'} className={location === '/wishlist' ? 'inactive' : 'active'}>  
    <div className="d-flex">
   <span>
   <HiOutlineInboxIn  className='fs-3 mx-2'/>
   </span>
    </div>
    {/* <p>Wishlist</p> */}
    </Link>
    <Link to={'Login'}  className={location === '/login' ? 'inactive' : 'active'} >
    <div className="d-flex">
   <span>
   < VscAccount  className='fs-3 mx-2 '/>
   </span>
    </div>
    {/* <p>Account</p> */}
    </Link>
    <Link to={'Cart'}   className={location === '/login' ? 'inactive' : 'active'}>
      <div  className='d-flex'>
    <span>
    <  CgShoppingCart  className='fs-3 mx-2'/>
    </span>
     
    {/* <p> */}
    <span className='text-danger'>
    {totalProducts > 0 && `(${totalProducts})`}
    </span>
    {/* </p> */}
    </div>
    </Link>
   </div>
      </div>
     </div>
    </header>
    </>
  )
}

export default Header