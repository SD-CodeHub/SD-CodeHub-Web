import React from "react";
import { FaBullseye, FaRocket, FaUsers, FaHandshake, FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
import Page16 from "./Page16";
import CEO1 from '../assets/swapnil_SD_Codehub.jpg'; // replace with actual image path
import CEO2 from '../assets/sachin_SD_CodeHub.jpg'; // replace with actual image path
import ChiefClient from '../assets/sanika_SD_Codehub.jpg'; // replace with actual image path


const AboutPage = () => {

  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Industry Partners" },
    { value: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Mission",
      description: "To deliver intelligent software that drives efficiency and measurable success for businesses worldwide."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Vision",
      description: "To lead global software innovation with cutting-edge automation and next-generation technology solutions."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Values",
      description: "Integrity, creativity, and collaboration guide every project we undertake and every relationship we build."
    }
  ];

  const team = [
    {
      img: CEO1,
      name: "Swapnil Patil",
      role: "Co-CEO | MERN Stack Developer",
      bio: "Leads innovation in AI and full-stack development, delivering scalable solutions that transform businesses.",
      tags: ["React.js", "Node.js", "AI/ML", "Cloud"],
      social: { linkedin: "https://www.linkedin.com/in/swapnil-patil-1029492bb/", github: "https://github.com/swapnil2382" }
    },
    {
      img: CEO2,
      name: "Sachin Rathod",
      role: "Co-CEO | Java Full Stack Developer",
      bio: "Architects robust Java systems and intelligent automation solutions for enterprise-level applications.",
      tags: ["Java", "Spring Boot", "Microservices"],
      social: { linkedin: "https://www.linkedin.com/in/sachin-rathod-469168310/", github: "https://github.com/FNICKE" }
    },
    {
      img: ChiefClient,
      name: "Sanika Jadhav",
      role: "Chief Client & Design Officer",
      bio: "Drives user-centric design excellence and fosters strong, lasting client partnerships through innovation.",
      tags: ["UI/UX", "Product Design", "Client Strategy"],
      social: { linkedin: "https://www.linkedin.com/in/sanika-jadhav-aa8b53329/", github: "https://github.com/Sanika1017" }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Building the Future,<br />
            <span className="bg-black bg-clip-text text-transparent">
              One Solution at a Time
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            We transform ambitious ideas into powerful digital solutions through innovation, expertise, and unwavering commitment to excellence.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our philosophy combines strategic thinking, technical excellence, and creative innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 -z-10"></div>
                
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white mb-6  duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Visionary leaders combining technical expertise with strategic insight to drive innovation and deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Social Icons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a href={person.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                      <FaLinkedin />
                    </a>
                    <a href={person.social.github} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300">
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-sm mb-3">
                    {person.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <Page16 />
    </div>
  );
};

export default AboutPage;