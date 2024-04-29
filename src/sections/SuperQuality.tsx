import { motion } from 'framer-motion';
import { shoe8 } from '../assets/images';
import Button from '../components/Button';
import { buttonLeft, fadeIn, popIn } from '../constants/animations';

const SuperQuality: React.FC = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-gray-200"
        >
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span> Shoes
        </motion.h2>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your expereince, providing you with
            unmatched quality, innovation, and a touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </motion.div>
        <motion.div
          variants={buttonLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-11"
        >
          <Button label="View Details" />
        </motion.div>
      </div>

      <motion.div
        variants={popIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
