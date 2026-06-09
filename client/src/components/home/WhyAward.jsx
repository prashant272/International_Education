import { FadeUp, StaggerContainer, StaggerItem, NeonCard } from "../Motion";

export default function WhyAward() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[320px] sm:w-[420px] md:w-[500px] h-[320px] sm:h-[420px] md:h-[500px] bg-[#4338CA]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[320px] sm:w-[420px] md:w-[500px] h-[320px] sm:h-[420px] md:h-[500px] bg-[#4338CA]/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-heading font-black mb-2 pb-3 bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent drop-shadow-2xl">
            Why International Education Award, 2026
          </h2>
          <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto rounded-full" />
          <p className="mt-6 text-indigo-100/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Gain international recognition, validate your achievements through independent jury assessment, and position your brand at the forefront of international education innovation.
          </p>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              title: "National & International Recognition",
              desc: "Gain prestigious recognition across the international education industry and position your organisation among the most trusted and respected leaders.",
              icon: "🌟",
            },
            {
              title: "Independent Jury Validation",
              desc: "All nominations are evaluated by an eminent and independent jury panel, ensuring credibility, transparency, and unbiased assessment.",
              icon: "⚖️",
            },
            {
              title: "Showcase Innovation & Impact",
              desc: "Highlight your innovations, achievements, and measurable impact before policymakers, industry leaders, and stakeholders.",
              icon: "💡",
            },
            {
              title: "Strengthen Brand Authority",
              desc: "Enhance brand reputation and reinforce trust among partners, clients, investors, and the broader international education ecosystem.",
              icon: "🏆",
            },
            {
              title: "Benchmark Against Industry Leaders",
              desc: "Measure your performance against industry best practices, international standards, and emerging international education trends.",
              icon: "📊",
            },
            {
              title: "Future-Ready Positioning",
              desc: "Demonstrate your organisation's readiness for future challenges through leadership, scalability, and sustainable growth.",
              icon: "🚀",
            },
          ].map((item, index) => (
            <StaggerItem
              key={index}
              className="h-full"
            >
              <NeonCard color="indigo" className="h-full">
                <div className="p-10 flex flex-col h-full text-left">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {item.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-black bg-gradient-to-r from-white to-[#c7d2fe] bg-clip-text text-transparent group-hover:text-[#818CF8] transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-indigo-100/60 text-base leading-relaxed font-medium group-hover:text-indigo-100 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-8 flex items-center gap-3">
                    <div className="h-1 w-12 bg-gradient-to-r from-indigo-500/50 to-transparent rounded-full group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </NeonCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
