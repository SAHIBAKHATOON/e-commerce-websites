import React from 'react';
import { Link } from 'react-router-dom'
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrival from '../components/NewArrival';
import Blogs from '../components/Blogs';
const Home = () => {
  return (
    <>
    <section className='banner mb-3'>
    <div className="container-xxl">
      <div className="row">
        <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
          <span className='shadow-lg p-3 mt-3 text-white'>Trade in offer</span>
          <h1>Super Value Deals</h1>
          <h2>On all products</h2>
          <p className='p-3 m-0'>Save more today with Apneck</p>
           <Link to={'/Shop'} className="button-link">Shop now</Link>
        </div>
      </div>
    </div>
    </section>

    <Hero />

    <section className='featured-products p-5'>
      <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>Featured Products</h1>
          <p>All Weather New Modern Designs</p>
        </div>
      
        <FeaturedProducts />
        
      </div>
      </div>
    </section>


     

    <section className='new-products p-5'>
      <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfits</p>
        </div>
      
        < NewArrival />
        
      </div>
      </div>
    </section>

    <section className='blogs p-5 mb-2'>
     <div className="container-xxl">
      <div className="row">
      <div className="text-center mb-3">
          <h1>What our customers say...</h1>
          <p className=''>Our customers never miss a bit on providing feedback</p>
        </div>
      
        <Blogs />
      </div>
     </div>
    </section>
    </>
  )
}

export default Home