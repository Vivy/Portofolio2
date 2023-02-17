import React, { useRef, useState } from 'react';
import css from './header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings bg-primary  ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Vivy</div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href='#experience'>Services</a>
          </li>
          <li>
            <a href='#work'>Experience</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#people'>Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+123456789</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          {console.log(menuOpened, 'is it working?')}
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
