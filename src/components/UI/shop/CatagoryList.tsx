import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { useGetGenreQuery } from '../../../redux/api/fetchGenre';



export const CategoryList: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const { data } = useGetGenreQuery();
    const genre = data?.genres || [];

    const context = useContext(StateContext);
    if (!context) {
        throw new Error('StateContext not found');
    }
    const { setGenre } = context;

    const nav = useNavigate()

    const handleGen = (gen:string)=> {
        setActiveCategory(gen)
        setGenre(gen)
        nav(`/category/${gen}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl p-4"
        >
            <div className="flex flex-row gap-3 justify-start items-center flex-wrap">
                {genre.map((gen) => (
                    <CategoryButton
                        key={gen}
                        name={gen}
                        isActive={activeCategory === gen}
                        onClick={() =>handleGen(gen)}
                    />
                ))}
            </div>
        </motion.div>
    );
};

// MOBILE CATEGORY LIST

import type { Selection } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { TbShoppingBag } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import CategoryButton from '../CategoryButton';
import { StateContext } from '../../../context/StateContext';

export const MobileCategoryList: React.FC = () => {
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["accessories"]));
    const { data } = useGetGenreQuery();
    const genre = data?.genres || [];

    const context = useContext(StateContext);
    if (!context) {
        throw new Error('StateContext not found');
    }
    const { setGenre } = context;

    const nav = useNavigate()
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
        [selectedKeys]
    );

    // Fix: Adjusted the handler to accept the event and item clicked
    const handleClick = (e: React.SyntheticEvent, type: string) => {
        if (type) {
            setGenre(type)
            nav(`/category/${type}`);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Dropdown className='bg-[var(--tan)]'>
            <DropdownTrigger>
                <a
                    className=" cursor-pointer text-lg flex items-center gap-x-3 text-[var(--gold)] button-text"
                >
                    {selectedValue}
                    <TbShoppingBag className='text-lg' />
                </a>
            </DropdownTrigger>
            <DropdownMenu
                disallowEmptySelection
                aria-label="Single selection example"
                selectedKeys={selectedKeys}
                selectionMode="single"
                variant="flat"
                onSelectionChange={setSelectedKeys}
                className='text-[var(--white)]'
            >
                {genre.map((item) => (
                    <DropdownItem
                        onPress={(e) => handleClick(e, item)} // Passing the event and item
                        className='lato-regular'
                        key={item}
                    >
                        {item}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
