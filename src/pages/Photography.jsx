import React, { useState, useEffect } from "react";
import { images } from "../images";
import { constants } from "buffer";

function Photography() {
    const [isBelow2K, setIsBelow2K] = useState(false);
    const [size, setSize] = useState('50%');

    useEffect(() => {
        const checkResolution = () => {
            const screenWidth = window.innerWidth;
            setIsBelow2K(screenWidth < 2000);


        };

        const checkSize = (height, width) => {
            const ratio = height / width;
            console.log(ratio);
            const screenWidth = window.innerWidth;

            if (screenWidth < 400) {
                setSize('50%');
            } else if (screenWidth < 800) {
                setSize('75%');
            } else {
                setSize('150%');
            }
        }

        // Initial check
        checkSize();

        // Add event listener to check resolution on window resize
        window.addEventListener('resize', checkSize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    return (
        <div>
            <div className=" bg-zinc-800 text-white p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img
                            src={image.src}
                            alt={`Thumbnail for image ${index}`}
                            style={{ height: 'auto', width: size, margin: 'auto' }} // Adjust width based on resolution
                        />
                        {/* <p>{index}</p> */}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photography;
