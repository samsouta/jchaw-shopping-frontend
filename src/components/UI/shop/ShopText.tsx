import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const ShopText: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-center ">
                <h1 className="lato-bold text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-[var(--dark-brown)] w-full max-w-[1000px] font-bold leading-tight">
                    Chase Your Style, Own <br />
                    the
                    <span id="text-id" className="pl-2 text-[var(--gold)]">
                        <TypeAnimation
                            sequence={[
                                "Moments",
                                1000,
                                "Style",
                                1000,
                                "Beautiful Day",
                                1000,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                            style={{ fontSize: "inherit", display: "inline-block" }}
                        />
                    </span>
                </h1>
            </div>

        </>
    )
}

export default ShopText