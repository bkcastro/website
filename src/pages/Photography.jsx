import React, { useState, useEffect } from "react";
import { images } from "../images";
import { constants } from "buffer";

function Photography() {

    return (
        <div>
            <div className=" bg-zinc-800 text-white p-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img
                            src={image.src}
                            alt={`Thumbnail for image ${index}`}
                            style={{ height: 'auto', width: '100%', margin: 'auto' }} // Adjust width based on resolution
                        />
                        {/* <p>{index}</p> */}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photography;
