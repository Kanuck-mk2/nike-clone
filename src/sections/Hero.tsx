import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { shoes, statistics } from '../constants';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  buttonLeft,
  fadeIn,
  popUp,
  slideInFromRight,
  staggerPop,
} from '../constants/animations';

const Hero: React.FC = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col justify-center min-h-screen
       gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="z-[10]"
        >
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className=" text-white mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold rounded-full">
            <span className="xl:whitespace-nowrap relative z-10 pr-10 rounded-md">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3 p-2"> Nike </span>
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-xl leading-8 mt-6 mb-14">
            Discover stylish Nike arrivals, quality comfort, <br /> and
            innovation for your active life.
          </p>
        </motion.div>

        <motion.div
          variants={buttonLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button label="Show Now" iconUrl={arrowRight} />
        </motion.div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-5  ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-palanquin font-bold text-white">
                {stat.label}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {' '}
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen 
      max-xl:py-40 gradient-bg"
      >
        <motion.div
          
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={bigShoeImg}
            alt="Shoe Collection"
            width={610}
            height={500}
            className="object-contain relative"
          />
        </motion.div>
        <motion.div
          variants={staggerPop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"
        >
          {shoes.map((shoe, index) => (
            <motion.div key={index} variants={popUp} whileHover={{ y: -20 }}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe: string) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
