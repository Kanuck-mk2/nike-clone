import { motion } from 'framer-motion';
import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';
import { fadeIn, popIn, slideUp2, staggerUp2 } from '../constants/animations';

const SpecialOffer: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center lg:justify-between items-center lg:flex-row sm:flex-col gap-10 max-container">
      <motion.div
        className="flex-1"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          title="offer"
        />
      </motion.div>
      <div className="flex flex-1 flex-col">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-gray-200">
            We Provide You
            <span className="text-coral-red"> Special </span>
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Emark on a shopping journey that redefines your experience with
            unbeatable deals. From preimer selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </motion.div>
        <motion.div
          className="mt-11 flex flex-wrap gap-4"
          variants={staggerUp2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={slideUp2} key="button1">
            <Button label="Shop Now" iconUrl={arrowRight} />
          </motion.div>

          <motion.div variants={slideUp2} key="button2">
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-black"
            />
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;
