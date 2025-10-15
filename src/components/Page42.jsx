import React from "react";
import {
    FaLightbulb, // Using solid version
    FaHandshake, // More professional than FaHandsHelping
    FaChartLine,
    FaRegSmileBeam, // A slightly more modern smile
    FaRocket,
    FaShieldAlt,
    FaCog, // Singular for a cog icon
    FaCheckCircle, // For success/growth in "What We Offer"
    FaCommentDots, // For communication
} from "react-icons/fa"; // Importing relevant new icons

const Page42 = () => {
    return (
        <>
            <section className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 py-10 px-6 md:px-16 lg:px-24">

                {/* ==== HERO SECTION ==== */}
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Every Challenge Became a Chapter of Growth
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        At <span className="font-semibold text-gray-900">SD CodeHub</span>, we treat every project as a story —
                        one filled with challenges, breakthroughs, and the trust that binds it all together.
                        This is how we built, learned, and delivered — without losing sight of what matters most:
                        <span className="font-bold"> our client’s confidence.</span>
                    </p>
                </div>

                {/* ==== STORY SECTION ==== */}
                <div className="max-w-6xl mx-auto mt-24 space-y-24">

                    {/* ---- Phase 1 ---- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">Phase 1 — The Vision & Kickoff</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                It began with a simple idea — transforming a traditional workflow into a seamless, intelligent ecosystem.
                                Our client approached us with a concept but no technical clarity.
                                Through multiple discovery calls, we converted that idea into a roadmap powered by
                                <span className="font-semibold"> modern web architecture, AI automation, and human insight.</span>
                            </p>
                            <div className="flex items-center gap-3 text-gray-800 font-medium">
                                <FaLightbulb className="text-2xl text-gray-700" /> <span>Clarity through Collaboration</span>
                            </div>
                        </div>

                        {/* Right Box - Professionalized Icon & Styling */}
                        <div className="bg-gray-900 rounded-2xl text-white p-10 flex flex-col items-center text-center shadow-lg">
                            <div className="bg-gray-700 p-4 rounded-full mb-4"> {/* Darker circle background */}
                                <FaHandshake className="text-4xl text-white" /> {/* White icon for contrast */}
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                From vision boards to technical blueprints — every decision was made *with* the client, not *for* them.
                            </p>
                        </div>
                    </div>

                    {/* ---- Phase 2 ---- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="space-y-6 order-2 md:order-1">
                            <h3 className="text-3xl font-bold text-gray-900">Phase 2 — Facing the Storm</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Midway through, we hit turbulence — unexpected API failures, data security conflicts,
                                and shifting timelines. But instead of crumbling under pressure, our team rose stronger.
                                We implemented backup workflows, automated deployments, and continuous testing
                                to maintain product stability and client confidence.
                            </p>
                            <div className="flex items-center gap-3 text-gray-800 font-medium">
                                <FaShieldAlt className="text-2xl text-gray-700" /> <span>Resilience in Every Line of Code</span>
                            </div>
                        </div>

                        {/* Right Box - Professionalized Icon & Styling */}
                        <div className="bg-gray-900 rounded-2xl p-10 flex flex-col items-center text-center text-gray-300 shadow-md order-1 md:order-2">
                            <div className="bg-gray-700 p-4 rounded-full mb-4">
                                <FaCog className="text-4xl text-white" /> {/* White cog icon */}
                            </div>
                            <p className="leading-relaxed">
                                Every issue we faced became a lesson. We didn’t just fix problems —
                                we future-proofed the entire system to make sure they never happened again.
                            </p>
                        </div>
                    </div>

                    {/* ---- Phase 3 ---- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">Phase 3 — Launch & Beyond</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                When the platform went live, it wasn’t just a deployment — it was a moment of shared pride.
                                The client’s confidence grew, and so did our relationship.
                                Even post-launch, we continued to offer updates, insights, and performance audits to ensure
                                their success stayed consistent.
                            </p>
                            <div className="flex items-center gap-3 text-gray-800 font-medium">
                                <FaChartLine className="text-2xl text-gray-700" /> <span>Success that Scales with Time</span>
                            </div>
                        </div>

                        {/* Right Box - Professionalized Icon & Styling */}
                        <div className="bg-gray-900 text-white rounded-2xl p-10 flex flex-col items-center text-center shadow-lg">
                            <div className="bg-gray-700 p-4 rounded-full mb-4">
                                <FaRocket className="text-4xl text-white" />
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                What started as a project became a partnership — one that continues to grow
                                through innovation, feedback, and mutual respect.
                            </p>
                        </div>
                    </div>
                </div>


                {/* ==== ATTRACTIONS / TAKEAWAYS ==== */}
                <div className="max-w-6xl mx-auto text-center mt-32 space-y-8">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                        What We Offer
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        At <span className="font-semibold text-gray-900">SD CodeHub</span>, we deliver more than just digital solutions —
                        we provide <span className="font-semibold">scalable innovation, reliable performance,</span> and
                        <span className="font-semibold"> long-term partnerships.</span>
                        Every project we take on reflects our passion for technology and our commitment to helping businesses
                        <span className="font-semibold text-gray-900"> grow, adapt, and succeed</span> in a competitive world.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-left">
                        {/* Client-Centric Approach */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition border border-gray-100">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-4">
                                <FaRegSmileBeam className="text-2xl" /> {/* Adjusted icon size and color */}
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-900">Client-Centric Approach</h4>
                            <p className="text-gray-600">
                                Every feature is designed around the client’s real-world goals and needs, not assumptions.
                            </p>
                        </div>
                        {/* Strong Communication */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition border border-gray-100">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-4">
                                <FaCommentDots className="text-2xl" /> {/* New icon for communication */}
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-900">Strong Communication</h4>
                            <p className="text-gray-600">
                                Weekly updates, transparent reporting, and milestone reviews keep everyone aligned and confident.
                            </p>
                        </div>
                        {/* Continuous Improvement */}
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition border border-gray-100">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-4">
                                <FaChartLine className="text-2xl" /> {/* Adjusted icon size and color */}
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-900">Continuous Improvement</h4>
                            <p className="text-gray-600">
                                We never stop learning — each project refines our process and elevates the next.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page42;