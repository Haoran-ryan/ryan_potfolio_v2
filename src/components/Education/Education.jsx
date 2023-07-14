import { eduExp } from '../../utils/data';
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../utils/motion';
import css from './Education.module.scss';
import { motion } from 'framer-motion';

const Education = () => {
    return(
        <motion.section 
        variants={ staggerChildren }
        initial="hidden"
        whileInView='show'
        viewport={{ once:false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText yPaddings">
                    My Education
                </span>
                <div className={`flexCenter ${css.experiences}`}>
                    {
                        eduExp.map((exp, index) => {
                            return (
                            <motion.div className={`flexCenter ${css.exp}`} 
                            variants={textVariant2}
                            key={index}>
                                <div className={css.post}>
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.degree}>
                                    <h1>{exp.degree}</h1>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                            );
                        })

                    }
                    <motion.div 
                    variants={zoomIn(1,1)}
                    className={css.progressbar}>
                        <motion.div 
                        variants={fadeIn('down','tween', 2, 1.5)}
                        className={css.line}></motion.div>
                        <div><div className={css.circle} style={{background:"#286F6C"}}></div></div>
                        <div><div className={css.circle} style={{background:"#F2704E"}}></div></div>
                        <div><div className={css.circle} style={{background:"#EEC048"}}></div></div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
};

export default Education;