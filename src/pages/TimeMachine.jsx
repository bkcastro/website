import React, { useState, useEffect } from "react";
// import { images } from "../images";
import { constants } from "buffer";

function TimeMachine() {
    const images = 75;

    return (
        <div className="p-4 bg-zinc-800 flex flex-col gap-">
            <div className=" text-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(images)].map((_, index) => (
                    <div key={index} className="">
                        <img
                            src={`photography_webp/img_${index}.webp`}
                            alt={`deleted this image because people like to judge/assume what they don't know`}
                            style={{ height: 'auto', width: '100%', margin: 'auto' }} // Adjust width based on resolution
                        />
                        {/* <p>{index}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeMachine;
