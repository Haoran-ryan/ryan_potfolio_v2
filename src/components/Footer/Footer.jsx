import React from "react";
import css from './Footer.module.scss';
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren } from "../../utils/motion";
const Footer = () => {
    return(
        <motion.sectinon
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}} 
        className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={footerVariants}
            className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                    Let's Build Something Together <br/> and Make It Awesome
                    </span>
                    <span className="primaryText">
                    Start by <a href="mailto:gryan@outlook.com.au"> saying 'hi' </a>
                    </span>
                </div>
                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>Sydney NSW, Australia</p>
                        <p> </p>
                      
                    </div>
                    <div className={`${css.menu}`}>
                        <li>Front End</li>
                        <li>Back End</li>
                        <li>Data Analysis</li>
                    </div>
                </div>
            </motion.div>
        </motion.sectinon>
    )
};

export default Footer;