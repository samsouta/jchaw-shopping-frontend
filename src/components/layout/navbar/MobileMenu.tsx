import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Menu } from 'lucide-react';


type MobileMenuProps = {
    navList: { id: string; label: string }[]; // Define the structure of the navList prop
};

const MobileMenu: React.FC<MobileMenuProps> = ({navList}) => {
    return (
        <>
            <Dropdown className=' bg-[--off-white]' backdrop="blur">
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
                        <DropdownItem key={item.id} className=' text-md text-[var(--text-title)]'
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