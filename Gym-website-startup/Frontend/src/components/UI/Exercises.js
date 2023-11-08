import React from 'react'
import '../../styles/Exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercises = () => {
  return (
  <section id='schedule'>
    <div className="container exercise_container">
    <div className="exercise_top">
        <h2 className="section_title">Benefits of <span className="highlights">Exercise</span>
  </h2>
  <p>  Exercising regularly can improve your mood and reduce feelings of anxiety and depression</p>
        </div>
        <div className="exercise_wrapper">
            <div className="exercise_item" data-aos='zoom-in'   data-aos-duration='1500'>
                <span className="exercise_icon">
                    <img src={lunges} alt=""  />
                    </span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>Regular exercise at the gym plays a vital role in promoting a healthy lifestyle by improving 
                           
                        </p>
                    </div>
            </div>



            <div className="exercise_item" data-aos='zoom-in'   data-aos-duration='1500'>
                <span className="exercise_icon">
                    <img src={yoga} alt=""  />
                    </span>
                    <div className="exercise_content">
                        <h4>Increased Flexibility</h4>
                        <p>Engaging in regular gym workouts can significantly increase flexibility by stretching 
                        </p>
                    </div>
            </div>

            <div className="exercise_item" data-aos='zoom-in'   data-aos-duration='1500'>
                <span className="exercise_icon">
                    <img src={extended} alt=""  />
                    </span>
                    <div className="exercise_content">
                        <h4>Reducing Blood Pressure</h4>
                        <p>engaging aerobic exercise  and strength training reduced risk of hypertension-related issues 
                        </p>
                    </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Exercises