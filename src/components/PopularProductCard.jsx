import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full hover:shadow-lg hover:rounded-lg hover:scale-prop'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] transition delay-100 duration-300 ease-in-out mx-auto' />
      <div className='mt-8 flex justify-start gap-2.5 px-4'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin px-4'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal px-4 pb-2'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;