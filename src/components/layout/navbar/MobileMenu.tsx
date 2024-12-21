import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


type MobileMenuProps = {
    navList: { id: string; label: string }[]; // Define the structure of the navList prop
};

const MobileMenu: React.FC<MobileMenuProps> = ({navList}) => {
    const nav = useNavigate()
    const handleMenuList = (item:string) => {
        const page = item.toLocaleLowerCase()
        nav(`/${page}`)
    }
    return (
        <>
            <Dropdown className=' bg-[var(--light-tan)]' backdrop="blur">
                <DropdownTrigger >
                    <span
                        className=' cursor-pointer'
                    >
                        <Menu className=' text-xl text-[var(--text-title)]' />
                    </span>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                   {
                    navList?.map((item)=> (
                        <DropdownItem onPress={()=>handleMenuList(item.label)} key={item.id} className=' text-md button-text text-[var(--dark-brown)]'
                         >{item.label}
                         </DropdownItem>
                    ))
                   }
                    
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default MobileMenu