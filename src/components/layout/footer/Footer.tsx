import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { SocialIcon } from './SocialIcon';
import { FooterLink } from './FooterLink';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-[#f7f3e8] border-t border-[#e0d9c8]">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <FooterSection title="About Us">
                            <p className="text-[#593d23] leading-relaxed">
                                We create innovative solutions that transform businesses and enhance user experiences.
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <SocialIcon href="https://github.com" icon={Github} label="GitHub" />
                                <SocialIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
                                <SocialIcon href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
                            </div>
                        </FooterSection>

                        {/* Quick Links */}
                        <FooterSection title="Quick Links">
                            <nav className="flex flex-col space-y-2">
                                <FooterLink href="/about">About</FooterLink>
                                <FooterLink href="/services">Services</FooterLink>
                                <FooterLink href="/portfolio">Portfolio</FooterLink>
                                <FooterLink href="/blog">Blog</FooterLink>
                            </nav>
                        </FooterSection>

                        {/* Resources */}
                        <FooterSection title="Resources">
                            <nav className="flex flex-col space-y-2">
                                <FooterLink href="/docs">Documentation</FooterLink>
                                <FooterLink href="/support">Support</FooterLink>
                                <FooterLink href="/terms">Terms of Service</FooterLink>
                                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            </nav>
                        </FooterSection>

                        {/* Contact Info */}
                        <FooterSection title="Contact Us">
                            <div className="space-y-3">
                                <a href="mailto:contact@example.com" className="flex items-center space-x-2 text-[#593d23] hover:text-[#b8860b] transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                    <span>samxsouta@gmail.com</span>
                                </a>
                                <a href="tel:+1234567890" className="flex items-center space-x-2 text-[#593d23] hover:text-[#b8860b] transition-colors duration-300">
                                    <Phone className="w-5 h-5" />
                                    <span>+60 (111) 790-1410</span>
                                </a>
                                <div className="flex items-center space-x-2 text-[#593d23]">
                                    <MapPin className="w-5 h-5" />
                                    <span>123 KKKK Ave, Suite 000<br />KL City, Malaysia 12345</span>
                                </div>
                            </div>
                        </FooterSection>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-[#e0d9c8]">
                        <p className="text-center text-[#593d23]">
                            © {currentYear} J-Chaw. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer