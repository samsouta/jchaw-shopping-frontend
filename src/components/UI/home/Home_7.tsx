import React from 'react'


const Home_7: React.FC = () => {
    return (
        <>
            <div className="flex justify-center mt-24 px-4 md:px-8">
                <div className="max-w-[700px] w-full flex flex-col items-center gap-y-6">
                    {/* Heading */}
                    <h1 className="tracking-wider text-center text-xl md:text-2xl text-[var(--dark-brown)] montserrat font-bold">
                        Trusted by leading companies
                    </h1>

                    {/* List of Companies */}
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <li className="text-2xl text-[var(--dark-brown)] header-text">D Planday</li>
                        <li className="text-2xl text-[var(--dark-brown)] header-text">umbraco</li>
                        <li className="text-2xl text-[var(--dark-brown)] header-text">Pearifisher</li>
                        <li className="text-2xl text-[var(--dark-brown)] header-text">Brightpearl</li>
                        <li className="text-2xl text-[var(--dark-brown)] header-text">P Planday</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Home_7