import Navbar from "@/components/Header/navbar";
import Banner from "@/components/Header/banner";
import CardSlider from "@/components/Card/mid-card";
import AboutSection from "@/components/About/about";


export default function Home() {
  return (
    <>
    <div className="bg-stone-200">
       <Navbar />
       <Banner />
       <div className="container mx-auto px-4">
         <CardSlider />
       </div>
       <AboutSection />
    </div>
    </>
  );
}
