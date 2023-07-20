import { useState, useEffect } from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../../utils/motion';

const Hero = () => {
    const [portraitImage, setPortraitImage] = useState('./ryan.png');

    //Switch the image every 5 seconds
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setPortraitImage(prevImg=> prevImg === './ryan.png' ? './ryan2.png' : './ryan.png')
    //         }, 3000);
    //     return ()=> clearInterval(interval);
    // }); 

    return(
        <section className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={ staggerContainer }
            initial='hidden'
            whileInView="show"
            viewport={ { once: false, amount: 0.25}}
            className={`innerWidth ${css.container}`}>
                {/* Upper Elements  */}
                <div className={`${css.upperElements}`}>
                    
                    <motion.span 
                    variants={fadeIn("right","tween", 0.2, 1)}
                    className='primaryText'>
                        Hi 你好, <br/> I'm Ryan
                    </motion.span>
                    <motion.span 
                    variants={fadeIn("left","tween", 0.2, 1)}
                    className='secondaryText'>
                        I'm a full stack developer 
                        <br />
                        Love challenges & bring solutions
                    </motion.span>
                </div>

                {/* Person Image */}
                <motion.div 
                variants={fadeIn("up","tween", 0.2, 1)}
                className={`${css.person}`}>
                    <motion.img 
                    variants={slideIn("up","tween", 0.5, 1.3)}
                    src={portraitImage} alt="" />
                </motion.div>

                {/* Email */}
                <a href="mailto:gryan@outlook.com.au" 
                className={`secondaryText ${css.email}`}>
                    gryan@outlook.com.au
                </a>
                {/* Lower Elements */}
                <div className={`${css.lowerElements}`}>
                    <motion.div 
                    variants={fadeIn("right","tween", 0.2, 1)}
                    className={`${css.experience}`}>
                        <div className="primaryText">2021</div>
                        <div className="secondaryText">
                            <div>Started adventure</div>
                            <div>Into tech...</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("left","tween", 0.2, 1)}
                    className={`${css.certificate}`}>
                        <img src="./certificate_color.png" alt="certificate" />
                        <span>FULL STACK DEVELOPER</span>
                        <span>LIFETIME LEARNER</span>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
};

export default Hero;