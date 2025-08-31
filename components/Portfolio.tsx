
import React, { useState, useCallback, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { PortfolioItem } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/GenericIcons';
import PortfolioModal from './PortfolioModal';

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? PORTFOLIO_DATA.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === PORTFOLIO_DATA.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-light-bg/50 dark:bg-dark-bg/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-title dark:text-dark-title">Nuestro Portafolio</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-light-text dark:text-dark-text">Casos de éxito que demuestran nuestro compromiso y experiencia.</p>
        
        <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden relative h-[500px]">
                <div className="flex transition-transform ease-out duration-500 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {PORTFOLIO_DATA.map((item) => (
                        <div key={item.id} className="w-full flex-shrink-0 p-2 md:p-4 h-full">
                             <div 
                                onClick={() => openModal(item)} 
                                className="bg-light-card dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full h-full flex flex-col overflow-hidden cursor-pointer"
                                role="button"
                                tabIndex={0}
                                aria-label={`View details for ${item.title}`}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
                             >
                                <img src={item.imageUrl} alt={item.title} className="w-full h-2/3 object-cover" />
                                <div className="p-6 text-left">
                                    <p className="text-sm font-semibold text-aurora-yellow">{item.category}</p>
                                    <h3 className="text-xl font-bold mt-1 text-light-title dark:text-dark-title">{item.title}</h3>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 p-3 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full text-light-title dark:text-dark-title transition" aria-label="Previous project">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Right Arrow */}
            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 p-3 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full text-light-title dark:text-dark-title transition" aria-label="Next project">
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
                {PORTFOLIO_DATA.map((_, slideIndex) => (
                    <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-aurora-yellow w-6' : 'bg-gray-300 dark:bg-gray-600'}`} aria-label={`Go to project ${slideIndex + 1}`}></button>
                ))}
            </div>
        </div>
      </div>
      {selectedProject && <PortfolioModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default Portfolio;