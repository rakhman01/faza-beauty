import React from 'react';

interface JoinButtonProps {
  className?: string;
}

const JoinButton: React.FC<JoinButtonProps> = ({ className = '' }) => {
  return (
    <button className={`justify-center self-stretch px-5 py-3 text-sky-400 rounded-3xl border-2 border-sky-400 border-solid ${className}`}>
      Join Sekarang
    </button>
  );
};

export default JoinButton;