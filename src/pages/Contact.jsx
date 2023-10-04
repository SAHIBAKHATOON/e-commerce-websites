import React from 'react';
import { BsInstagram, BsLinkedin}  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <section className="contact-wrapper p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
                 <h1>#Reach Out to Us</h1>
                 <p className='text-success fs-3'>we are only a step from you</p>
          </div>
        
          
        </div>
      </div>
    </section>

    <section className="contact-info m-3 p-5">
      <div className="container-xxl">
        <div className="row">
        <div className=" d-flex align-items-center justify-content-center">
          
              <div className="col-6 d-flex align-items-center">
                <map name="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3635788.814623532!2d80.85930415!3d27.138192749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696344251368!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </map>
              </div>
            
              <div className="col-6 align-items-center">
                <div className="text-start mb-2">
                <h2>Contact Information</h2>
                </div>
                 <div className='footer-details'>
          <p className='mb-3'><b>Address:</b> Thika town, Naltex building, 2nd floor</p>
          <p className='mb-3'><b>Phone:</b> <a href='tel:+5948948390'> Call Us +5895845430</a></p>
          <p className='mb-5'><b>Hours:</b>  From 8 a.m To 6 p.m</p>
          <p className='mb-3'><b>Follow Us</b></p>
          <div className="col-4 social-icons mb-3 d-flex justify-content-around">
            <Link> <AiFillTwitterCircle className='fs-4'/></Link>
             <Link>  <BsFacebook className='fs-4'/></Link>
             <Link> <BsInstagram className='fs-4'/></Link>
             <Link> <BsLinkedin className='fs-4'/></Link>
          </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos dolore fuga quidem labore nam blanditiis, commodi nostrum vero, ipsam accusantium, adipisci eos. Repudiandae minus animi doloremque repellat dolorem rem dolore voluptatibus, perspiciatis quibusdam ea praesentium blanditiis consequatur at aperiam atque libero aliquid, asperiores et optio maxime. Libero ad, fugiat quibusdam doloribus odit veniam incidunt laudantium nisi animi harum sequi, ex, porro atque culpa cum odio recusandae! Illum saepe voluptate laudantium explicabo nobis commodi numquam exercitationem quaerat at, dolore officia. Reiciendis similique placeat nostrum pariatur quam quos ea veritatis rerum alias voluptates, accusantium quaerat, facilis error ipsa nihil quas delectus?
          </p>
              </div>
            </div>
            </div>
        
      </div> 
    </section>


    <div className="form p-5">
      <div className="container-xxl">
        <div className="row">
         
          <div className="d-flex align-items-center justify-content-center">
           <div className="card col-8 p-5">
           <div className="text-center mb-3">
            <h2>Send Us a Message</h2>
          </div>
            <div className="col-12 d-flex mb-3">

           <div className="col-6 p-3">
           <input type="text" 
            className='form-control p-2'
             placeholder='Enter First Name' 
             aria-label='Enter First Name'/>
           </div>
         <div className="col-6 p-3">
         <input type="text" 
            className='form-control p-2'
             placeholder='Enter Second Name..' 
             aria-label='Enter Second Name'/>
         </div>
            </div>
            <div className='p-2 mb-3'>
              <label className='mb-2'>Enter Your Email Address</label>
              <input type="email" 
            className='form-control p-3'
             placeholder='Enter Email' 
             aria-label=''/>
            </div>

            <div className="form-floating p-2 mb-4">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Type in your Message</label>
            </div>
          
          <button type='submit'>Submit</button>
         
           </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact