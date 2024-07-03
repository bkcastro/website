import React, { useState, useEffect } from "react";
import { images } from "../images";

function Photography() {
    const [isBelow2K, setIsBelow2K] = useState(false);


    useEffect(() => {
        const checkResolution = () => {
            const screenWidth = window.innerWidth;
            setIsBelow2K(screenWidth < 2000);
        };

        // Initial check
        checkResolution();

        // Add event listener to check resolution on window resize
        window.addEventListener('resize', checkResolution);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', checkResolution);
    }, []);

    return (
        <div>
            <h1 className="pl-2">don't mind the mess</h1>
            <div className="bg-black text-white p-4 grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img
                            src={image.src}
                            alt={`Thumbnail for image ${index}`}
                            style={{ height: 'auto', width: isBelow2K ? '50%' : '100%' }} // Adjust width based on resolution
                        />
                        <p>{image.caption}</p>
                        <p>{index}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photography;
