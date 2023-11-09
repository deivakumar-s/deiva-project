import React from 'react'
import '../../styles/Start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return (
   <section id='classes'>
    <div className="container">
        <div className="start_wrapper">
            <div className="start_img">
                <img src={trainerImg} alt="" data-aos='fade-left'   data-aos-duration='1500'  />
            </div>
            <div className="start_content"data-aos='fade-right'   data-aos-duration='1500'>
                <h2 className="section_title">
                    Ready to make a <span className="highlights">change?</span>
                </h2>
                <p>A flexible body promotes better posture and allows for a wider range of motion,contributing to overall physical well-being. Absolutely , you are all to make positive changes in my fitness and well-being by committing to a consistent gym routine </p>
             
            </div>
        </div>
    </div>
   </section>
  )
  
}

export default Start
