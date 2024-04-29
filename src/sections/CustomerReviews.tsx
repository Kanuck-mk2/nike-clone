import { motion } from 'framer-motion';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
import { popUp,  slideUp2, staggerPop } from '../constants/animations';

const CustomerReviews: React.FC = () => {
  return (
    <section className="max-container gradient-bg" id="reviews">
      <motion.div
        variants={slideUp2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="font-palanquin text-center text-4xl font-bold text-gray-200">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <div className="flex justify-center">
          <p className="text-lg margin-auto mt-4 max-w-lg text-center text-gray-200 ">
            Hear genuine stories from our satisfied customers about <br /> their
            exceptional experiences with us.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
        variants={staggerPop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {reviews.map((review) => (
          <motion.div key={review.customerName} variants={popUp}>
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
