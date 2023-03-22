import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";


function ClasCardv2() {
  return (
 <>
<section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
    <div className="h-full">
        <div className="max-w-xs mx-auto">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                    <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png" width="320" height="180" alt="Course"/>
                    </figure>
                </a>
                <div className="flex-grow flex flex-col p-5">
                    <div className="flex-grow">
                        <header className="mb-3">
                            <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">The Ultimate JavaScript Course</h3>
                            </a>
                        </header>
                        <div className="mb-8">
                            <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a>
                        <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a>
                        <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- More components -->
<div x-show="open" className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
    <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        <div>👉 <a className="hover:underline ml-1" href="https://cruip.com/?ref=codepen-cruip-snippet-10" target="_blank">More components on Cruip.com</a></div>
        <button className="text-gray-500 hover:text-gray-400 ml-5" @click="open = false">
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
        </button>
    </div>
</div> */}
</>
  );
}


export default ClasCardv2;
