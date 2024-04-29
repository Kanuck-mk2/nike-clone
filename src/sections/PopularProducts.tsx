import { motion } from 'framer-motion';
import PopularProductsCard from '../components/PopularProductsCard';
import { products } from '../constants';
import { slideUp2, staggerUp } from '../constants/animations';

const PopularProducts: React.FC = () => {
  return (
    <section id="products" className=" bg-dark max-container max-sm:mt-12">
      <motion.div
        variants={slideUp2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-start items-center text-center gap-5"
      >
        <h2 className="text-4xl font-palanquin font-bold text-white">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-xl  text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
        variants={staggerUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((product) => (
          <motion.div
            key={product.name}
            variants={slideUp2}
            whileHover={{ y: -20 }}
          >
            <PopularProductsCard key={product.name} {...product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
