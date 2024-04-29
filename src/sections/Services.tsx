import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';
import { motion } from 'framer-motion';
import { staggerUp, slideUp2 } from '../constants/animations';

const Services: React.FC = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      <motion.div
        variants={staggerUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div key={service.label} variants={slideUp2}>
            <ServiceCard key={service.label} {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
