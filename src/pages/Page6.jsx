import React from "react";
import { FaUsers, FaLaptopCode, FaChartLine, FaRocket, FaHandshake } from "react-icons/fa";

const Page6 = () => {
    const positions = [
        {
            title: "Sales & Marketing Intern",
            type: "Internship (Remote)",
            desc: "Assist in lead generation, market research, and client outreach. Ideal for students passionate about digital marketing and communication.",
        },
        {
            title: "Web Developer Intern (MERN Stack)",
            type: "Internship (Hybrid / Remote)",
            desc: "Work with our dev team on live web projects using React, Node.js, and MongoDB. Gain hands-on experience with scalable frontend and backend systems.",
        },
        {
            title: "UI/UX Design Intern",
            type: "Internship (Remote)",
            desc: "Collaborate with our design team to create clean, user-friendly interfaces for websites and dashboards. Tools: Figma, Adobe XD.",
        },
    ];

    const reasons = [
        {
            icon: <FaHandshake className="text-3xl text-black" />,
            title: "Real Industry Exposure",
            desc: "Work on live client projects and learn how real businesses use technology to grow.",
        },
        {
            icon: <FaChartLine className="text-3xl text-black" />,
            title: "Career Growth",
            desc: "We mentor interns and contributors to become independent professionals or join us long-term.",
        },
        {
            icon: <FaRocket className="text-3xl text-black" />,
            title: "Innovation First",
            desc: "We experiment, build fast, and focus on learning modern stacks like MERN, AI, and automation.",
        },
    ];

    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <section className="py-20 px-6 sm:px-10 lg:px-20 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Grow Your Career <br /> <span className="text-black">with SD CodeHub</span>
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
                    Join a team of innovators, developers, and designers passionate about
                    building impactful digital solutions. Whether you're a fresher or a
                    learner — we value skills, creativity, and drive.
                </p>
            </section>

            {/* Why Join Us */}
            <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-3">Why Join SD CodeHub?</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We’re not just another tech team — we’re a community of learners and
                        builders shaping the digital future together.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-3">Open Positions</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We’re looking for talented learners, creators, and problem-solvers
                        eager to collaborate and grow with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "Frontend Developer", type: "MERN / React", desc: "Work with React.js and Tailwind to build dynamic, responsive UIs." },
                        { title: "Backend Developer", type: "Node.js / Express", desc: "Build APIs, integrate databases, and ensure smooth backend logic." },
                        { title: "UI/UX Designer", type: "Figma / Adobe XD", desc: "Design modern and user-friendly layouts for dashboards and apps." },
                        { title: "AI & Automation", type: "Python / AI Tools", desc: "Work on chatbots, analytics dashboards, and automation projects." },
                        { title: "Sales & Marketing", type: "Remote / Flexible", desc: "Help expand SD CodeHub’s reach through campaigns and lead generation." },
                        { title: "Content Writer", type: "Remote / Part-Time", desc: "Write content for websites, blogs, and tech-related posts." },
                    ].map((job, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <FaLaptopCode className="text-4xl text-black mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <p className="text-gray-500 text-sm font-medium mb-4">{job.type}</p>
                            <p className="text-gray-700 text-sm leading-relaxed">{job.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* How We Work Section */}
            <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50 text-center">
                <h2 className="text-4xl font-bold mb-6">How We Work</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
                    We keep things simple, transparent, and growth-focused — giving every team member the freedom to learn and lead.
                </p>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        { num: "01", title: "Apply", desc: "Fill out our simple Google Form with your details and skills." },
                        { num: "02", title: "Connect", desc: "If shortlisted, we’ll schedule a short discussion or task." },
                        { num: "03", title: "Collaborate", desc: "Join real-world projects, guided by our mentors." },
                        { num: "04", title: "Grow", desc: "Build your portfolio and gain live project experience." },
                    ].map((step, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                            <div className="text-4xl font-bold text-black mb-3">{step.num}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
 {/* Contact / Apply Section */}
      <section
        id="contact-form"
        className="py-20 px-6 sm:px-10 lg:px-20 bg-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Interested in Joining Us?</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Fill out the form below to apply for internships or collaborations. We’ll
          get back to you soon.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfqQS_gK0Wc8qHqv2qRLMbmLKopXst7k4D8L3qxyjwMnu06hg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-10 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
        >
          Contact Us
        </a>
      </section>
        </div>
    );
};

export default Page6;
