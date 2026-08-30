import { ArrowDown, CalendarDays, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-retro px-5 py-12 md:px-8 md:py-4" aria-labelledby="hero-title">
      <div className="container mx-auto max-w-6xl">
        <img src={`${import.meta.env.BASE_URL}estrela.png`} alt="" className="hero-star" aria-hidden="true" />

        <div className="grid items-center gap-15 lg:gap-24 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative order-2 lg:order-1">
            <img src={`${import.meta.env.BASE_URL}logo-sainf2.png`} alt="Ilustração da SAINF XIII" className="monitor-logo" />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="pixel-title mb-4 text-lg text-primary">SEMANA ACADÊMICA DA INFORMÁTICA</p>
            <h1 id="hero-title" className="pixel-title hero-title mb-5 text-base-content"><span>XIII</span> SAINF</h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-base-content/75 lg:mx-0">
              Três dias para conectar pessoas, ideias e tecnologia. Palestras, minicursos e experiências que deixam a curiosidade em modo turbo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <div className="info-chip"><CalendarDays size={18} /> 13 de outubro · 08:30</div>
              <div className="info-chip"><MapPin size={18} /> UFSM · Santa Maria</div>
            </div>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#inscricao" className="btn btn-primary btn-lg gap-2">INSCREVA-SE!</a>
              <a href="#cronograma" className="btn btn-outline btn-lg">Programação <ArrowDown size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
