import React from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";

type DataType = {
    id: number;
    name: string;
};

type Props = {
    data: DataType;
};

const AboutJoinOurTeamCard: React.FC<Props> = ({ data }) => {
    const { name } = data;
    return (
        <div className="flex items-center gap-x-4">
            <i className="text-xl text-[var(--green)] join-our-team-icon">
                <IoCheckmarkCircle />
            </i>
            <span className="text-nun text-sm sm:text-md lg:text-lg">
                {name}
            </span>
        </div>
    );
};

export default AboutJoinOurTeamCard;
