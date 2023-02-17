import React, { useState } from 'react';
import css from './header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Vivy</div>

        <ul style={getMenuStyles()} className={`flexCenter ${css.menu}`}>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Experience</a>
          </li>
          <li>
            <a href=''>Portfolio</a>
          </li>
          <li>
            <a href=''>Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123456789</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>
        <div className={css.menuIcon} onClick={() => setShow(!show)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
