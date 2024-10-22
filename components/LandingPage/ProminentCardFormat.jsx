import React from "react";

const CardContent = ({
    title, 
    content, 
    link: {
        url,
        text,
    }
}) => {
   return (
    <div className="mt-2 pd-4 mr-4">
        <div>
         <div className="absolute z-10 ">
             <img
                    src="/LandingPageAssets/prominent-icon.png" 
                    alt="Another Icon"
                    className="w-28 h-38 rounded-xl ml-2 opacity-100 mt-2" 
                     style={{
                    pointerEvents: "none", 
                }}
            />
            </div>
        </div>
        <div className="relative -top-10 ml-16 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl pd-4" 
         style={{ backgroundImage: "linear-gradient(to right, #FF9E00, #6546FF)" }}>
            <div className="md:flex rounded-lg p-2 mx-0.5 my-0.5" style={{ backgroundImage: "linear-gradient(to right, #1B1A1A 40%, #3F2C9C)" }}>
            <div className="p-6 ml-10">
                <h2 className="text-yellow-500 uppercase tracking-wide text-xl font-semibold">
                    {title}
                </h2>
                <p className="mt-2 text-gray-300">
                    {content}
                </p>
                <a href={url} className="mt-4 inline-block border border-yellow-500 text-yellow-500 font-semibold px-4 py-2 rounded hover:bg-yellow-500 hover:text-[#1B1A1A] transition duration-300">
                    {text}
                </a>
                <div className="relative">
                    <img
                        src="/LandingPageAssets/card-grid.webp"
                        alt="Grid Asset"
                        className="absolute -right-14 -bottom-20 w-96 h-96 opacity-10 hidden lg:block md:flex-shrink-0" 
                        style={{
                            transform: "rotate(100deg)",
                            pointerEvents: "none",
                        }}
                    />
                </div>
            </div>
           </div>
        </div>
    </div>
   );
};

export default CardContent;
