import { star } from '../assets/icons';

interface PopularProductsCardProps {
  imgURL: string;
  name: string;
  price: string;
}

const PopularProductsCard: React.FC<PopularProductsCardProps> = ({
  imgURL,
  name,
  price,
}) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-gray-200">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-gray-200">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal ">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
