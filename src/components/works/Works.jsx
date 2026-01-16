import React from 'react'
import food from './img/food.png'
import phone from './img/phone.png'
import home from './img/home.png'
import "./works.css"


const Works = () => {
  return (
    <div>
      <div className="work">
        <h1>How it works.</h1>
        <div className="work_cards">
           <div className="foods">
              <img src={food} alt="food" />
              <h3>Adapt your menu items</h3>
              <p>Easily adapt your menu us the webflow CMS and allow customers to browse your items.</p>
               </div>
          <div className="phone">
                <img src={phone} alt="phone" />
                    <h3>Accept online orders & takeout</h3>
                    <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
          </div>
         
             <div className="home">
                 <img src={home} alt="home" />
                 <h3>Manage delivery or takeout</h3>
                 <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
             </div>
        
        </div>
      </div>
    </div>
  )
}

export default Banner
