import { star } from '../assets/icons';

interface ReviewCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  imgURL,
  customerName,
  rating,
  feedback,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="mt-6 max-w-sm text-center text-lg text-gray-200">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt="star"
        />
        <p className="text-xl font-montserrat text-gray-100">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold text-gray-100">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
