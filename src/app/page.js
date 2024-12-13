import ElementSection from "@/components/ElementSection";
import FeaturesSection from "@/components/FeaturesSection";
import Quotation from "@/components/Quotation";
import Slider from "@/components/Slider";
import Image from "next/image";
import ViewMore from "@/components/ViewMore";
import Bestselling from "@/components/Bestselling";
import MaterialCarousel from "@/components/MaterialCarousel";
import Ideal from "@/components/Ideal";
import PremiumStones from "@/components/PremiumStones";
import  Rsat from "@/components/Rsat";

import TestimonialWithForm from "@/components/TestimonialWithForm";

export default function Home() {
  return (
    <>
      <main className="container ">
       
        <Slider/>
        <Quotation className=""/>
        <div className="h-0.5  bg-gray-800"></div>
        <FeaturesSection/>
        <ElementSection/>
        <ViewMore />
        <div className="h-0.5  bg-gray-800"></div>
        <MaterialCarousel/>
        <Bestselling/>

        <div className="h-0.5  bg-gray-100"></div>
        
        <Ideal />
       <PremiumStones/>
       <Rsat/>
       
      <TestimonialWithForm />
        
        
      </main>
    </>
  );
}
