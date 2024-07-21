import React from "react";
import NavigationItem from "./NavigationItem";
import ImageGallery from "./ImageGalery";

const Product: React.FC = () => {
    const navigationItems = [
        { label: 'Semua', isActive: true },
        { label: 'Lip', isActive: false },
        { label: 'Serum', isActive: false },
        { label: 'Kolagen', isActive: false },
    ];

    return (
        <section className="pt-7 max-md:max-w-full flex flex-col items-center bg-white">
            <h2 className="text-2xl font-bold uppercase text-slate-600">
                Product
            </h2>
            <section className="mt-5 text-sm text-center text-neutral-600 w-[754px] max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit facilis optio accusantium magnam eius, totam voluptatibus ducimus et, tempore laborum possimus dolore veniam, esse impedit? Temporibus quam provident aliquam?
            </section>
            <nav className="mt-12 max-md:mt-10">
                <ul className="flex gap-5 justify-between items-center text-sm font-medium text-center whitespace-nowrap text-slate-600">
                    {navigationItems.map((item, index) => (
                        <NavigationItem key={index} label={item.label} isActive={item.isActive} />
                    ))}
                </ul>
            </nav>
                <ImageGallery />

        </section>
    );
};

export default Product;