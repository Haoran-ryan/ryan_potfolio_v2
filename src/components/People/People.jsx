import css from './People.module.scss';
import {motion} from 'framer-motion';
import {staggerChildren} from "../../utils/motion.js";

const People = () => {
    return(
    <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
        <div className={`yPaddings innerWidth ${css.container}`}>
            people comments
        </div>
    </motion.section>
        )
};

export default People;