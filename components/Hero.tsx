import React from 'react';

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/aurora-devs-assets/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="text-white">Transforma tu Presencia Digital con </span>
          <span className="text-aurora-yellow">Aurora Devs</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Servicios expertos en automatización de marketing, desarrollo web y de aplicaciones móviles, diseñados para un crecimiento medible.
        </p>
        <a
          href="#contact"
          className="bg-aurora-yellow text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
          aria-label="Get a free consultation"
        >
          Obtener una Consulta Gratuita
        </a>
      </div>
    </section>
  );
};

export default Hero;