import React from 'react'
import { motion } from 'framer-motion';
interface CategoryButtonProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  isActive = false,
  onClick,
}) => {

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-full
        transition-colors duration-200
        ${isActive
          ? 'bg-[#593d23] text-[#f7f3e8]'
          : 'bg-[#f0eeeb] text-[#593d23] hover:bg-[#e0d9c8]'
        }
        shadow-sm hover:shadow-md
      `}
    >
      <span className="font-medium">{name}</span>
    </motion.button>
  )
}

export default CategoryButton;