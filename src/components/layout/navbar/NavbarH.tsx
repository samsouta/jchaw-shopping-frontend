import React, { useState } from 'react'
import { Navbar } from "flowbite-react";
import { navList } from '../../../data/navbar';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';


const NavbarH: React.FC = () => {
    const [activeId, setActiveId] = useState<string>(localStorage.getItem("navActive") || 'home');
    const handleClick = (id: string) => {
        localStorage.setItem('navActive', id)
        setActiveId(id);
        console.log(id)
    };

    return (
        <>
            <Navbar className=' bg-[var(--tan)]' >
                <Navbar.Brand href="#">
                    {/* <img src="#" className="mr-3 h-6 sm:h-9" alt="" /> */}
                    <span className="self-center text-[var(--light-tan)] header-text whitespace-nowrap text-xl font-semibold dark:text-white">J-Chaw</span>
                </Navbar.Brand>

                <div className=' relative flex justify-center items-center gap-x-5' >
                    <Navbar.Collapse >
                        {
                            navList.map((item) => (
                                <Navbar.Link
                                    onClick={() => handleClick(item.id)}
                                    key={item.id}>
                                    <motion.div
                                        initial={{}}
                                        whileHover={{
                                            scale: 1.2,
                                            color: "var(--text-highlight)"
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",

                                        }}
                                        style={{
                                            color: activeId === item.id ? 'var(--text-highlight)' : 'var(--text-title)', // Dynamically set color
                                        }}
                                        className={`text-md  cursor-pointer`}
                                    >
                                        {item.label}
                                    </motion.div>
                                </Navbar.Link>
                            ))
                        }
                    </Navbar.Collapse>
                    <motion.div
                        whileHover={{

                        }}
                        className=' hidden md:flex'
                    >
                        <Button className=' button-text' >Shop Now</Button>
                    </motion.div>
                    {/* mobile menu */}
                    <div className=' md:hidden' ><MobileMenu navList={navList} /></div>
                </div>
            </Navbar>
        </>
    )
}

export default NavbarH