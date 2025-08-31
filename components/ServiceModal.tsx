
import React, { useEffect } from 'react';
import type { Service } from '../types';
import { CloseIcon } from './icons/GenericIcons';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleRequestConsultation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        // Wait for modal to close before scrolling
        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-light-card dark:bg-dark-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4 animate-fade-in-up flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-light-text dark:text-dark-text hover:text-aurora-yellow transition-colors z-20"
          aria-label="Close service details"
        >
          <CloseIcon className="w-8 h-8" />
        </button>
        <div className="w-full md:w-1/2">
            <img src={service.imageUrl} alt={service.title} className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center mb-4">
               <div className="w-12 h-12 bg-aurora-yellow rounded-full flex items-center justify-center mr-4 shrink-0">
                 <service.icon className="w-6 h-6 text-white" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold text-light-title dark:text-dark-title">{service.title}</h3>
            </div>
            <div className="text-light-text dark:text-dark-text text-base leading-relaxed mb-6">
              <p>{service.details}</p>
            </div>
            <a
              href="#contact"
              onClick={handleRequestConsultation}
              className="bg-aurora-yellow text-white font-bold py-3 px-6 rounded-full text-base hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 self-start"
              aria-label="Request a free consultation for this service"
            >
              Solicitar una Consulta Gratuita
            </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
