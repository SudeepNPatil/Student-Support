import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function How_we_Support_you() {
    return (
        <div className="flex flex-col gap-1 w-[80vw] self-center mt-10">
            <ScrollReveal>
                <h1 className="text-lg font-semibold ml-2">HOW WE SUPPORT YOU ? </h1>
                <p className="text-gray-700 text-sm ml-2 mb-4">Here is the details of how we support you</p>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5  transition-all duration-500">
                    <div className="flex flex-col gap-2  flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl">1</button>
                        <div className="w-2 flex-auto bg-blue-200 rounded-sm"></div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold">Ready2go Project</h1>
                        <p className="text-gray-700 mt-1 w-[65vw] mb-1">List of pre-built, well-documented academic projects. Instant order and quick delivery.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-1 transition-all duration-500">
                    <div className="flex flex-col gap-2 flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl">2</button>
                        <div className="w-2 flex-auto bg-blue-200 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold">Custom Build Service</h1>
                        <p className="text-gray-700 mt-1 w-[65vw]">Students submit their idea and requirements, our team builds and delivers the project.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-1  transition-all duration-500">
                    <div className="flex flex-col gap-2 flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl">3</button>
                        <div className="flex-auto w-2 bg-blue-200 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold">Project Navigator</h1>
                        <p className="text-gray-700 mt-1 w-[65vw]">Roadmap, tech stack suggestions, deployment tips, and full mentorship for self-builders.</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex gap-5 mt-1 transition-all duration-500">
                    <div className="flex flex-col gap-2 flex-wrap items-center">
                        <button className="border-2 border-black w-7 h-7 rounded-3xl">4</button>
                        <div className="flex-auto w-2 bg-blue-200 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[17px] font-semibold"> Debug & Rescue</h1>
                        <p className="text-gray-700 mt-1 w-[65vw]">One-on-one issue resolution, bug fixing, and expert suggestions to continue the project.</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}