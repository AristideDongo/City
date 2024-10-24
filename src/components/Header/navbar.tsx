// import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-stone-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <Image src="" alt="Logo de la Ville" className="h-10 mr-2" /> */}
        <Link href="/">
          <span className="text-black text-lg font-bold ml-5">Ma Ville</span>
        </Link>
      </div>
      <div className="flex-grow flex justify-center">
      <Link href="/">
          <span className="text-black mx-4 font-semibold text-xl hover:text-orange-600 transition duration-300">Acceuil</span>
        </Link>
        <Link href="/about">
          <span className="text-black mx-4 font-semibold text-xl hover:text-orange-600 transition duration-300">Destination</span>
        </Link>
        <Link href="/services">
          <span className="text-black mx-4 font-semibold text-xl hover:text-orange-600 transition duration-300">Histoires</span>
        </Link>
        <Link href="/contact">
          <span className="text-black mx-4 font-semibold text-xl hover:text-orange-600 transition duration-300">Contactez-nous</span>
        </Link>
      </div>
      <div>
        <Link href="#">
          <button className="bg-green-400 font-bold border-2 border-black text-black px-4 py-2 rounded hover:bg-green-600 duration-300 transition hover:shadow-lg hover:shadow-black">
            Decouvrez ABIDJAN
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
