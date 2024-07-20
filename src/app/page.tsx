import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ImageGallery from "@/components/image-galery/ImageGalery";

export default function Home() {
  return (
    <main className="flex flex-col items-center self-stretch px-16 pt-6 pb-1 w-full bg-slate-600  max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col container max-w-full max-md:max-w-full bg-slate-600">
        <Header />
        <Hero />
        <ImageGallery />
      </div>
    </main>
  );
}
