import { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow =useHeaderShadow();
  return(
    <motion.div 
    initial='hidden'
    whileInView='show'
    variants={headerVariants}
    viewport={{once:false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}
    style={{boxShadow: headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          H.Ryan Guo 
        </div>
        <ul 
        style={getMenuStyles(menuOpen)}
        className={`flexCenter ${css.menu}`}>
          <li><a href="">Skills</a></li>
          <li><a href="">Education</a></li>
          <li><a href="">Portofolio</a></li>
          <li><a href="">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
          <p>+(61) 474 458 819</p>  
            <BiPhoneCall size={"40px"}/>
          </li>
        </ul>
        {/* For Medium and Small Screens */}
        <div className={css.menuIcon}
          onClick={() => setMenuOpen((prev)=>!prev)}>
          
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </motion.div>
  )
};

export default Header;
