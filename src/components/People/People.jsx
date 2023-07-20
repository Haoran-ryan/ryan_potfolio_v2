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
            <div className={`flexCenter ${css.heeading}`}>
                <span className="PrimaryText">People Talk About Me</span>
                <p style={{ marginTop: "2rem"}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis repellat quam quae. Magnam, sed a? Ratione quis nemo ipsum aliquam quae debitis ad adipisci, quia ducimus voluptatem, fugit delectus.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iusto quis qui quod consectetur alias dolorum, aspernatur illo excepturi laudantium praesentium nam aliquid quisquam laboriosam. Iusto cumque porro omnis minus.</p>
            </div>

            {/* Carousal */}
        </div>
    </motion.section>
        )
};

export default People;