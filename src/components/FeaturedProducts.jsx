 import React from 'react';
   import { PRODUCTS } from './Products'
 
 const FeaturedProducts = () => {
   return (
     <>
    <div className="row mt-4">
    {PRODUCTS.slice(0,4).map(product => (
           <div className="col-3">
             <div key={product.id}>
                <div className="col mb-5">  
                    <div className="card h-100 m-auto p-3">
                        <img src={product.image} alt='' className='card-img-top img-fluid m-auto p-3' />
                        <div className="card-details">
                          <div className="title mb-3">
                          <span>{product.brand}</span>
                            <h5 className='mt-2'>{product.name}</h5>
                          </div>
                          <div className="card-footer text-center mb-3">
                          <p className='mb-3'>{product.status}</p>
                          {/* <hr />  */}
                            <p className='text-danger'><strike>{product.rate}</strike></p>
                          </div>
                        </div>
                    </div>
                </div>
              </div>  
           </div>
        ))}
        </div>
     </>
   )
 }
 
 export default FeaturedProducts