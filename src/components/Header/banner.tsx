// components/Banner.js
import Image from 'next/image';
import Image1 from '@/images/Abidjan by night.jpeg'

const Banner = () => {
  return (
    <div className="flex items-start p-6 bg-stone-200">
      <div className="flex-shrink-0 ml-20">
        <Image 
          src={Image1} 
          alt="Description de l'image"
          width={500} 
          height={400} 
          className="rounded-lg border-2 border-black "
        />
      </div>
      <div className="ml-24 flex-grow">
        <h1 className="text-2xl font-bold text-black">Plongez dans l’effervescence d’Abidjan, 
            <br /> où traditions et créativité se rencontrent. 
            <br /> Explorez des marchés colorés, 
            <br />savourez une cuisine délicieuse 
            <br />et vibrez au rythme des festivals. 
            <br />Entre lagunes et plages, 
            <br />Abidjan vous offre une expérience culturelle 
            <br />inoubliable.</h1>
        <div className="mt-5">
          <button className="bg-green-400 font-bold border-2 border-black text-black px-4 py-2 rounded hover:bg-green-600 duration-300 transition hover:shadow-lg hover:shadow-black">
            Explorez {`l'univers`} culturelles de la ville {`d'ABIDJAN`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
