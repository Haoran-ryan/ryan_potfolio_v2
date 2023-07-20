import { WhatDoIHelp, devExperience } from '../../utils/data';
import { motion } from 'framer-motion';
import css from './Expertise.module.scss';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';

const Expertise = () => {
    return(
        <motion.section 
        variants={staggerContainer}
        initial='hidden'
        whileInView="show"
        viewport={ { once: false, amount: 0.25}}
        className={css.wrapper}>

            <a className="anchor" id="expertise"></a>
            <div className={`paddings yPaddings flexCenter InnerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {
                        devExperience.map((exp, i) => {
                            return (
                            <motion.div 
                            variants={fadeIn('right','tween',(i+1)*0.3, 1)}
                            className={css.exp} key={i}>
                                <div className="flexCenter" style={{ background: exp.bg}}>
                                    <exp.icon size={25} color="white"/>
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className='secondaryText'>{exp.technology}</span>
                                </div>
                            </motion.div>)
                        })
                    }
                </div>
                <motion.div 
                variants={textVariant(0.8)}
                className={css.rightSide}>
                    <span className="primaryText">What do I offer?</span>
                    {
                        WhatDoIHelp.map((paragraph, i) => {
                            return <span className='secondaryText' key={i}>{ paragraph }</span>
                        })
                    }
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>
                                10000+
                            </span>
                            <span className='secondaryText'>
                                Hours of Software Development
                            </span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>
                                 10+
                            </span>
                            <span className='secondaryText'>
                                Years of Diverse Experience in Education and Translation 
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
};

export default Expertise;