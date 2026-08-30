import Countdown from './Countdown';

export default function CountdownSection() {
  return (
    <section id="contagem" className="countdown-section px-5 py-16 md:px-8 md:py-20" aria-labelledby="countdown-title">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="pixel-title mb-3 text-primary">// SAVE THE DATE</p>
        <h2 id="countdown-title" className="text-4xl md:text-5xl">System booting up...</h2>
        <div className="flex justify-center">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
