import css from './hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
const Hero = () => {
  return (
    <section className={` paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className='primaryText'
          >
            Hello There, <br /> Vivy here
          </motion.span>

          <motion.span
            variants={fadeIn('left', 'tween', 0.4, 1)}
            className='secondaryText'
          >
            I design beautifull and simple <br />
            WebSites, And I love it
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn('up', 'tween', 0.5, 1.3)}
            src='./person.png'
            alt=''
          />
        </motion.div>

        <a href='mailto:Email@thisisTheEmail.com' className={css.email}>
          Email@thisisTheEmail.com
        </a>
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
            className={css.experience}
          >
            <div className='primaryText'>1</div>
            <div className='secondaryText'>
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.5, 1)}
            className={css.certificate}
          >
            <img src='./certificate.png' alt='' />
            <span>CERTIFICATE PROFETIONAL</span>
            <span>UI/UX DESIGN</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
