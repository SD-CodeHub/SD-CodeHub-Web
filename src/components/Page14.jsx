import React from "react";

const Page14 = () => {
  const sections = [
    {
      title: "Powering Digital Transformation",
      description:
        "Our team of experts guides organizations through their digital transformation journey, leveraging innovative technologies to optimize processes, improve efficiency, and create competitive advantage. We focus on measurable results that truly transform businesses.",
    },
    {
      title: "Driving Business Growth",
      description:
        "We help companies unlock new revenue streams and expand market presence through data-driven strategies, process automation, and customer-centric solutions. Our approach ensures sustainable growth that aligns with your long-term objectives.",
    },
    {
      title: "Empowering Businesses to Succeed",
      description:
        "By combining technical expertise with industry insights, we empower companies to make informed decisions, adopt cutting-edge technologies, and build scalable solutions that drive operational excellence and strategic success.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Revolutionizing the Tech Landscape
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
          We help businesses achieve excellence through innovative solutions, industry expertise, and a focus on measurable results.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8`}
          >
            {/* Number / Step Indicator */}
            <div className="flex-shrink-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-400">
                {`0${index + 1}`}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page14;
