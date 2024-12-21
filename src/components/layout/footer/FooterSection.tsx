import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-[#593d23] font-semibold text-lg">{title}</h3>
      {children}
    </div>
  );
};