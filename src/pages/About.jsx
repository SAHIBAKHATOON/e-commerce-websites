import React from 'react';
import know from '../assets/images/know.jpg';
import { Link } from 'react-router-dom';
import vid from '../assets/images/video.mp4';
import img1 from '../assets/images/blog-1.jpg';
import img2 from '../assets/images/blog-2.jpg'
import img3 from '../assets/images/blog-3.jpg'
import img4 from '../assets/images/blog-4.jpg';
import Marquee from "react-fast-marquee";
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';

const About = () => {
  return (
    <>
      <section className="about-wrapper p-5 mb-3">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-whe">#Know Us</h1>
              <p className="text-white fs-3">Get to know us more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="know-us p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex">
              <div className="col-6">
                <img src={know} alt="" className='img-fluid p-3' />
              </div>
              <div className='col-6 d-flex flex-column text-center justify-content-center  p-3'>
               <div className='mb-3'>
               <h1>Who are we?</h1>
               </div>
              <div className='mb-3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam tempore unde aperiam, consectetur harum a eum error,
                  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam tempore unde aperiam, consectetur harum a eum error,
                  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?

                </p>
              </div>
              <div className='mt-5'>
                <Link className='fs-3' to={'/contact'}>Contact Us</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
     <div className="container-xxl">
      <div className="row">
        <div className="d-flex flex-column align-items-center justify-content-center">
        <div className='mb-4'>
          <h2 className='text-center'>Download our <Link className='fs-2'><b>App</b></Link></h2>
        </div>
        <div className="col-6 mb-3">
          <video loop autoPlay muted src={vid}></video>
        </div>
        </div>
      </div>
     </div>
      </section>

      <section className="blogs p-5 col-12">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
           <h1>What our customers say...</h1>
           <p>Our customers never miss a bit on providing feedback</p>
            </div>
             
        
            
        <div className="card col-6 blog-details-page p-5 mb-3">
          <div className="d-flex">
           
            <div className="col-4">
              <img src={img1} className="img-fluid rounded-start" alt="..." />
            </div>
        
              <div className="card-body col-8 p-4">
                <span>
                  <b>Marvel Clein</b>
                </span>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                
              </div>
              
           
             
          </div>
        </div>

        <div className="card col-6 blog-details-page p-5 mb-3">
          <div className="d-flex">
           
            <div className="col-4">
              <img src={img2} className="img-fluid rounded-start" alt="..." />
            </div>
        
              <div className="card-body col-8 p-4">
                <span>
                  <b>Marvel Clein</b>
                </span>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                
              </div>
              
           
             
          </div>
        </div>
       

        <div className="card col-6 blog-details-page p-5 mb-3">
          <div className="d-flex">
           
            <div className="col-4">
              <img src={img3} className="img-fluid rounded-start" alt="..." />
            </div>
        
              <div className="card-body col-8 p-4">
                <span>
                  <b>Marvel Clein</b>
                </span>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                
              </div>
              
           
             
          </div>
        </div>


        <div className="card col-6 blog-details-page p-5 mb-3">
          <div className="d-flex">
            <div className="col-4">
              <img src={img4} className="img-fluid rounded-start" alt="..." />
            </div>
              <div className="card-body col-8 p-4">
                <span>
                  <b>Marvel Clein</b>
                </span>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                
              </div>
          </div>
        </div>


        <div className="card col-6 blog-details-page p-5 mb-3">
          <div className="d-flex">
            <div className="col-4">
              <img src={img2} className="img-fluid rounded-start" alt="..." />
            </div>
              <div className="card-body col-8 p-4">
                <span>
                  <b>Marvel Clein</b>
                </span>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                
              </div>
          </div>
        </div>
   

        <div className="card col-6 blog-details-page p-5 mb-3">
          <div className="d-flex">
            <div className="col-4">
              <img src={img1} className="img-fluid rounded-start" alt="..." />
            </div>
              <div className="card-body col-8 p-4">
                <span>
                  <b>Marvel Clein</b>
                </span>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                
              </div>
          </div>
        </div>      
          </div>
        </div>
      </section>

      <section className="marquee p-5">
      <div className="container-xxl">
        <div className="row">
       <div className="col-12 p-3">
        <Marquee className='p-2 slide'>
          <div className="card">
            <img src={icon1} alt="" className="img-fluid" />
            <p>Fast Shipping</p>
          </div>
          <div className="card">
            <img src={icon2} alt="" className="img-fluid" />
            <p>Quick Shipping</p>
          </div>
          <div className="card">
            <img src={icon3} alt="" className="img-fluid" />
            <p> High Saves</p>
          </div>
          <div className="card">
            <img src={icon4} alt="" className="img-fluid" />
            <p>24/7 Support</p>
          </div>
          <div className="card">
            <img src={icon5} alt="" className="img-fluid" />
            <p>Online Order</p>
          </div>
        </Marquee>
       </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default About