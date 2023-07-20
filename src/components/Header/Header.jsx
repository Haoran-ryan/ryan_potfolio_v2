import { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { GrResume } from "react-icons/gr";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow =useHeaderShadow();
  const menuRef = useRef()

  useOutsideAlerter({
    menuRef,
    setMenuOpen
  });
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
        ref={menuRef}
        style={getMenuStyles(menuOpen)}
        className={`flexCenter ${css.menu}`}>
          <li><a href="#expertise">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#portfolio">Portofolio</a></li>
          {/* <li><a href="">Testimonials</a></li> */}
          <li className={`flexCenter ${css.resume}`}
          
          ><a href="https://drive.google.com/file/d/15bFBl4Ymhzxc8VG1v6mI8mBIQ_I-QeM4/view?usp=sharing" target="_blank">
            <p>Resume</p></a>
            <GrResume size={"40px"}/>
          </li>
          <li className={`flexCenter ${css.phone}`}>
          <p>+(61) 414-808-882</p>  
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
