import About from "@/components/about/About";
import BusinessOpportunity from "@/components/business-opportunity/BusinessOpportunity";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ImageGallery from "@/components/image-galery/ImageGalery";
import Pricing from "@/components/packet-join/Pricing";
import Product from "@/components/product/Product";
import VisionMission from "@/components/vision-mision/VisionMision";

export default function Home() {
  return (
    <main className="flex flex-col items-center self-stretch px-16 pt-6 pb-1 w-full bg-slate-600  max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col container max-w-full max-md:max-w-full bg-slate-600">
        <Header />
        <Hero />
        <ImageGallery />
        <About />
        <VisionMission />
        <Product />
        <BusinessOpportunity />
        <Pricing />
      </div>
    </main>
  );
}
