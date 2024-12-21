import React from 'react'
import { Toast } from "flowbite-react";
import { BsFillSendCheckFill } from "react-icons/bs";


const JToast: React.FC = () => {
    return (
        <div>
            <Toast>
                <BsFillSendCheckFill className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
                <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
            </Toast>
        </div>
    )
}

export default JToast