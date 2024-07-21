import React from "react";
import PricingPlans from "./PricingPlans";

const Pricing: React.FC = () => {
    const navigationItems = [
        { label: 'Semua', isActive: true },
        { label: 'Lip', isActive: false },
        { label: 'Serum', isActive: false },
        { label: 'Kolagen', isActive: false },
    ];

    return (
        <section className="pt-7 max-md:max-w-full flex flex-col items-center bg-white">
            <h2 className="text-2xl font-bold uppercase text-slate-600">
                Paket Join
            </h2>
            <section className="mt-5 text-sm text-center text-neutral-600 w-[754px] max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit facilis optio accusantium magnam eius, totam voluptatibus ducimus et, tempore laborum possimus dolore veniam, esse impedit? Temporibus quam provident aliquam?
            </section>
                <PricingPlans />

        </section>
    );
};

export default Pricing;