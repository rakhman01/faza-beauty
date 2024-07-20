import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import JoinButton from '../common/JoinButton';

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 justify-between items-start w-full text-sm text-white max-md:flex-wrap max-md:max-w-full">
      <Logo />
      <Navigation />
      <JoinButton />
    </header>
  );
};

export default Header;