import React from 'react';

interface NavigationItemProps {
  label: string;
  isActive?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, isActive = false }) => {
  const baseClasses = "self-stretch my-auto";
  const activeClasses = "justify-center self-stretch px-7 py-2.5 text-white bg-sky-400 rounded-[29px] max-md:px-5";

  return (
    <li className={isActive ? activeClasses : baseClasses}>
      {label}
    </li>
  );
};

export default NavigationItem;