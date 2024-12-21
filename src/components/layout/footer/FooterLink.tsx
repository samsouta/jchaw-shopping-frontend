import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-[#593d23] hover:text-[#b8860b] transition-colors duration-300 inline-block relative group"
    >
      <span className="relative">
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
};