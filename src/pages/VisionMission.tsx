import { Eye, Target, Sparkles } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-jci-blue py-16 text-center text-white sm:py-20">
        <div className="section-container">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-jci-gold">JCI Biratnagar</p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Vision &amp; Mission</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">The direction and purpose guiding our work to create meaningful positive change.</p>
        </div>
      </div>

      <div className="section-container mt-12 sm:mt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 -translate-y-1/2 translate-x-1/2 rounded-full bg-jci-blue/10" aria-hidden="true" />
            <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-jci-blue text-white shadow-lg shadow-jci-blue/20 transition-transform duration-300 group-hover:scale-110"><Eye size={28} /></div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-jci-gold">Our Vision</p>
            <h2 className="mb-5 text-3xl font-bold text-jci-blue">Leading positive change</h2>
            <blockquote className="border-l-4 border-jci-gold pl-5 text-xl leading-relaxed text-slate-600 sm:text-2xl">
              “To be the leading global network of young active citizens.”
            </blockquote>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 -translate-y-1/2 translate-x-1/2 rounded-full bg-jci-gold/15" aria-hidden="true" />
            <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-jci-gold text-white shadow-lg shadow-jci-gold/20 transition-transform duration-300 group-hover:scale-110"><Target size={28} /></div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-jci-gold">Our Mission</p>
            <h2 className="mb-5 text-3xl font-bold text-jci-blue">Empowering young people</h2>
            <blockquote className="border-l-4 border-jci-gold pl-5 text-xl leading-relaxed text-slate-600 sm:text-2xl">
              “To provide leadership development opportunities that empower young people to create positive change.”
            </blockquote>
          </article>
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl bg-jci-blue px-8 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-jci-gold"><Sparkles size={24} /></div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Our Theme</p>
            <h2 className="text-3xl font-extrabold tracking-[0.08em] text-white sm:text-5xl">AIM <span className="text-jci-gold">•</span> GROW <span className="text-jci-gold">•</span> IMPROVE</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionMission;
