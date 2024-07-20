import React from 'react';

const navigationItems = [
  'Beranda',
  'Tentang Kami',
  'Produk',
  'Peluang Bisnis'
];

const Navigation: React.FC = () => {
  return (
    <nav className="flex gap-5 justify-between items-center max-md:flex-wrap">
      {navigationItems.map((item, index) => (
        <div key={index} className="self-stretch my-auto">
          {item}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;