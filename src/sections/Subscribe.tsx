import Button from '../components/Button';
import { motion } from 'framer-motion';
import { slideUp2, staggerUp2 } from '../constants/animations';

const Subscribe: React.FC = () => {
  return (
    <motion.section
      className="max-container flex flex-col lg:flex-col justify-center items-center lg:gap-10"
      id="contact-us"
      variants={staggerUp2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-4xl lg:max-w-md font-palanquin font-bold text-center lg:text-center mb-5 lg:mb-0 text-gray-200"
        variants={slideUp2}
        key="sub1"
      >
        <span className="text-coral-red">Sign Up</span> for Updates & Newsletter
      </motion.h3>

      <motion.div
        className="lg:max-w-[40%] w-full lg:w-auto flex flex-col lg:flex-row items-center 
        gap-5 p-2.5 sm:border-0 lg:border lg:border-coral-red rounded-full"
        variants={slideUp2}
        key="sub2"
      >
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="gradient-bg text-center text-white text-lg outline-none focus:ring-0 "
        />
        <div className="flex justify-center lg:justify-end items-center w-full lg:w-auto lg:mt-0">
          <Button label="Sign Up" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
