import { fadeIn, staggerChildren } from '../../utils/motion';
import css from './Portfolio.module.scss'; 
import { motion } from 'framer-motion';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';

const Portfolio = () => {
    return(
        <motion.section 
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="portfolio"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText'>
                            Latest Works
                        </span>
                        <p style={{ marginTop:"10px"} }>
                            I love what I do
                        </p>
                    </div>
                    <span className="secondaryText">
                        
                        <a href="https://www.linkedin.com/in/ryanhaoranguo/" target="_blank">MY <BiLogoLinkedin/> LinkedIn</a>
                        <br/>
                        <a href="https://github.com/Haoran-ryan" target="_blank">MY <BiLogoGithub/> GitHub</a>
                    </span>
                </div>

                {/* Images */}
                <div className={`flexCenter ${css.showCase}`}>
                    <a href="https://quizcraft-c8706.web.app/" target="_blank">
                    <motion.img 
                    variants={fadeIn('up','tween', 0.5, 0.6)}
                    src="./QuizCraft.png" alt="QuizCraft" 
                    />
                    </a>

                    <a href="https://dulcet-stroopwafel-07ade2.netlify.app/#/" target="_blank">
                        <motion.img 
                    variants={fadeIn('up','tween', 0.7, 0.6)}
                    src="./TutoNet.png" alt="TutoNet" 
                    />
                    </a>

                    <a href="https://haoran-ryan.github.io/personal_portfolio/" target='_blank'>
                    <motion.img 
                    variants={fadeIn('up','tween', 0.9, 0.6)}
                    src="./Portfolio1.png" alt="TutoNet" 
                    />
                    </a>

                </div>
            </div>
        </motion.section>
    )
};

export default Portfolio;