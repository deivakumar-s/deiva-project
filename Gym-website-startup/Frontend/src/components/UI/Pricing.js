import React from 'react'
import '../../styles/Pricing.css'

const Pricing = () => {
  return (
  <section id='pricing-plan'>
    <div className="container">
        <div className="pricing_top">
            <h2 className="section_title">
                Gym <span className="highlights">Pricing</span>plan
            </h2>
            <p>We are Offering Best Plans</p>
        </div>
        <div className="pricing_Wrapper">
            <div className="pricing_item" data-aos='fade-up'   data-aos-duration='1500'>
                <div className="pricing_card_top">
                    <h2 className='section_title'>Regular Member</h2>
                    <h2 className='pricing section_title'>$50 <span>/month</span></h2>
                </div>
                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> access to  basic gym equipment</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>group fitness class included</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>No additional perks or privileges</li>
                    </ul>
                   
                </div>
            </div>


            <div className="pricing_item pricing_item-02" data-aos='fade-up'   data-aos-duration='1500'>
                <div className="pricing_card_top">
                    <h2 className='section_title'>Premium Member</h2>
                    <h2 className='pricing section_title'>$70 <span>/month</span></h2>
                </div>
                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>personalixed workout programs </li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 classes per week</li>
                    </ul>
                    {/* <button className="register_btn">Join now</button> */}
                </div>
            </div>
            <div className="pricing_item pricing_item-03" data-aos='fade-up'   data-aos-duration='1500'>
                <div className="pricing_card_top">
                    <h2 className='section_title'>Standard Member</h2>
                    <h2 className='pricing section_title'>$100 <span>/month</span></h2>
                </div>
                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> limited group fitness class </li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>No access to premium services</li>
                    </ul>
                
                </div>
            </div>
        </div>
    </div>

  </section>
  )
}

export default Pricing
