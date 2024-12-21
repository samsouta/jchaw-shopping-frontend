import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-[#593d23] hover:text-[#b8860b] transition-all duration-300 transform hover:scale-110"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};