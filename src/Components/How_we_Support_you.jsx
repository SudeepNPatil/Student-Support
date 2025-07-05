import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function How_we_Support_you() {
    return (
        <div className="flex flex-col gap-1 w-[80vw] self-center mt-10 xl:mt-24 lg:mt-24 md:mt-20 sm:mt-16">

            <ScrollReveal >
                <h1 className="text-lg xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold xl:font-bold sm:font-bold ml-2 xl:px-8 ">HOW WE SUPPORT YOU ? </h1>
                <p className="text-gray-700  ml-2 mb-4 text-sm xl:text-xl lg:text-xl md:text-lg sm:text-base xl:px-8 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-2">Here is the details of how we support you</p>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-2  transition-all duration-500 xl:px-8">
                    <div className="flex flex-col gap-4  flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl xl:w-12 lg:w-10 md:w-9 sm:w-8 xl:h-12 lg:h-10 md:h-9 sm:h-8 sm:rounded-full xl:text-xl lg:text-lg sm:text-base">1</button>
                        <div className="w-[5px] flex-auto bg-blue-200 rounded-sm"></div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold xl:text-2xl lg:text-xl sm:text-lg xl:mt-1 lg:mt-1 sm:mt-1">Ready2go Project</h1>
                        <p className="text-gray-700 mt-4 mb-1 xl:text-xl lg:text-lg sm:text-base xl:mt-8 lg:mt-6 sm:mt-4 xl:mb-2 lg:mb-2 sm:mb-2">List of pre-built, well-documented academic projects. Instant order and quick delivery.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-4 transition-all duration- xl:px-8">
                    <div className="flex flex-col gap-4 flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl xl:w-12 lg:w-10 md:w-9 sm:w-8 xl:h-12 lg:h-10 md:h-9 sm:h-8 sm:rounded-full xl:text-xl lg:text-lg sm:text-base">2</button>
                        <div className="w-[5px] flex-auto bg-blue-200 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold xl:text-2xl lg:text-xl sm:text-lg xl:mt-1 lg:mt-1 sm:mt-1">Custom Build Service</h1>
                        <p className="text-gray-700 mt-4 xl:text-xl lg:text-lg sm:text-base xl:mt-8 lg:mt-6 sm:mt-4 xl:mb-2 lg:mb-2 sm:mb-2">Students submit their idea and requirements, our team builds and delivers the project.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-4  transition-all duration-500 xl:px-8">
                    <div className="flex flex-col gap-4 flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl xl:w-12 lg:w-10 md:w-9 sm:w-8 xl:h-12 lg:h-10 md:h-9 sm:h-8 sm:rounded-full xl:text-xl lg:text-lg sm:text-base">3</button>
                        <div className="flex-auto w-[5px] bg-blue-200 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold xl:text-2xl lg:text-xl sm:text-lg xl:mt-1 lg:mt-1 sm:mt-1">Project Navigator</h1>
                        <p className="text-gray-700 mt-4 xl:text-xl lg:text-lg sm:text-base xl:mt-8 lg:mt-6 sm:mt-4 xl:mb-2 lg:mb-2 sm:mb-2">Roadmap, tech stack suggestions, deployment tips, and full mentorship for self-builders.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-4 transition-all duration-500 xl:px-8">
                    <div className="flex flex-col gap-4 flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl xl:w-12 lg:w-10 md:w-9 sm:w-8 xl:h-12 md:h-9 sm:h-8 lg:h-10 sm:rounded-full xl:text-xl lg:text-lg sm:text-base">4</button>
                        <div className="flex-auto w-[5px] bg-blue-200 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold xl:text-2xl lg:text-xl sm:text-lg xl:mt-1 lg:mt-1 sm:mt-1"> Debug & Rescue</h1>
                        <p className="text-gray-700 mt-4 xl:text-xl lg:text-lg sm:text-base xl:mt-8 lg:mt-6 sm:mt-4 xl:mb-2 lg:mb-2 sm:mb-2">One-on-one issue resolution, bug fixing, and expert suggestions to continue the project.</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}