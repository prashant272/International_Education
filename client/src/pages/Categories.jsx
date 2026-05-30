import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { StaggerContainer, StaggerItem, PageHero, SectionHeading, FadeUp, NeonCard } from "../components/Motion.jsx";
import { useNavigate } from "react-router-dom";

const categoryGroups = [
  {
    group: "Schools & Educational Institutions",
    icon: "🏫",
    color: "from-[#1D4ED8] via-[#4338CA] to-[#9F1239]",
    items: [
      { title: "Best International School", desc: "Recognises schools demonstrating excellence in international curriculum and global learning standards." },
      { title: "Excellence in Higher Education", desc: "Honours universities and colleges providing outstanding academic programs and research opportunities." },
      { title: "Best Emerging School", desc: "Celebrates new educational institutions showing remarkable growth and innovative approaches." },
      { title: "Best School Infrastructure", desc: "Recognises institutions with outstanding facilities and state-of-the-art campus infrastructure." }
    ],
  },
  {
    group: "Teachers & Educators",
    icon: "👨‍🏫",
    color: "from-blue-400 to-blue-500",
    items: [
      { title: "Outstanding Teacher of the Year", desc: "Honours educators who have shown exceptional dedication and impact on student learning." },
      { title: "Innovative Educator Award", desc: "Recognises teachers utilizing creative and modern teaching methodologies." },
      { title: "Lifetime Achievement in Education", desc: "Celebrates lifelong dedication and extraordinary contribution to the field of education." }
    ],
  },
  {
    group: "Principals & Educational Leaders",
    icon: "🎓",
    color: "from-purple-400 to-purple-500",
    items: [
      { title: "Visionary Principal of the Year", desc: "Recognises school leaders demonstrating exceptional vision and institutional excellence." },
      { title: "Outstanding Educational Leader", desc: "Honours administrators who have significantly improved educational standards and management." }
    ],
  },
  {
    group: "Innovation & EdTech",
    icon: "💡",
    color: "from-[#1D4ED8] via-[#4338CA] to-[#9F1239]",
    items: [
      { title: "Best EdTech Startup", desc: "Celebrates innovative startups transforming education through technology." },
      { title: "Excellence in Digital Learning", desc: "Recognises platforms providing outstanding online and blended learning experiences." }
    ],
  }
];

const colorMap = {
  "Schools & Educational Institutions": "border-indigo-400/30 hover:border-indigo-400/60",
  "Teachers & Educators": "border-blue-400/30 hover:border-blue-400/60",
  "Principals & Educational Leaders": "border-purple-400/30 hover:border-purple-400/60",
  "Innovation & EdTech": "border-indigo-400/30 hover:border-indigo-400/60",
};

export default function Categories() {
  const navigate = useNavigate();

  return (

    <PageHero
      badge="International Education Award, 2026"
      icon="🏆"
      title="International Education Award Categories"
      subtitle="Recognizing international excellence and innovation across international education, leadership and technology."

    >
      {/* Category Sections */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 pb-2 space-y-0.5">
        {categoryGroups.map((group, gi) => (
          <section key={gi}>
            {/* Group heading */}
            <FadeUp className="flex items-center gap-2 mb-1">
              <span className="text-3xl">{group.icon}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-black font-serif text-white">{group.group}</h2>
                <div className={`mt-1 h-[3px] w-20 rounded-full bg-gradient-to-r ${group.color}`} />
              </div>
            </FadeUp>

            {/* Swiper for this group */}
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={group.items.length > 3}
              autoplay={{ delay: 3800 + gi * 200, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 18 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="!pb-12"
            >
              {group.items.map((item, ii) => (
                <SwiperSlide key={ii} className="h-auto">
                  <NeonCard color="indigo" className="h-full !p-0">
                    <div className="h-full flex flex-col text-left p-6 md:p-7 min-h-[220px]">
                      {/* Category badge */}
                      <span className={`inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${group.color} text-white mb-4 opacity-90`}>
                        {group.group}
                      </span>
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-indigo-300 mt-0.5 flex-shrink-0">🏅</span>
                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-100 transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-indigo-100/65 text-sm leading-relaxed mt-auto group-hover:text-indigo-100/85 text-left transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </NeonCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}
      </div>

      {/* CTA Footer */}
      <FadeUp className="text-center py-2 bg-gradient-to-t from-indigo-950/50 to-transparent border-t border-indigo-500/10">
        <p className="text-indigo-200/70 text-sm mb-4">All award categories are subject to jury review.</p>
        <div className="relative group w-max mx-auto">
          {/* The Glow Layer - Matches button shape exactly */}
          <div className="absolute inset-0 rounded-full bg-indigo-600/50 blur-md animate-border-glow group-hover:bg-indigo-400/40 transition-all" />

          {/* The Button */}
          <button
            onClick={() => navigate("/nominate")}
            className="relative z-10 btn-primary text-base px-8 py-3 rounded-full border border-indigo-400/50 bg-slate-950 text-white flex items-center gap-2"
          >
            Apply for Nomination →
          </button>
        </div>



      </FadeUp>
    </PageHero>
  );
}
