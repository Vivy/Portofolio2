import css from './people.module.scss';
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';
import Slider from 'react-slick';
import { comments, sliderSettings } from '../../utils/data';

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={` flexCenter ${css.heading}`}>
          <span className='primaryText'> People talk about</span>
          <p style={{ marginTop: '2rem' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid!
          </p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} classname={css.slider}>
            {comments.map((c, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img src={c.img} alt='' />
                  <p>{c.comment}</p>
                  <div className={css.line}></div>

                  <div className={css.bio}>
                    <span>{c.name}</span>
                    <span>{c.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
