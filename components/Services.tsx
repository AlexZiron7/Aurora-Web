
import React, { useState } from 'react';
import type { Service } from '../types';
import { SERVICES_DATA } from '../constants';
import ServiceModal from './ServiceModal';

const ServiceCard: React.FC<{ service: Service; onClick: () => void }> = ({ service, onClick }) => (
  <button
    onClick={onClick}
    className="bg-light-card dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-left h-full flex flex-col items-start"
    aria-label={`Learn more about ${service.title}`}
  >
    <div className="w-16 h-16 bg-aurora-yellow rounded-full flex items-center justify-center mb-6">
      <service.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-light-title dark:text-dark-title">{service.title}</h3>
    <p className="text-light-text dark:text-dark-text flex-grow">{service.description}</p>
  </button>
);

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-title dark:text-dark-title">Nuestros Servicios</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-light-text dark:text-dark-text">Soluciones integrales para potenciar tu marca en el mundo digital.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={() => openModal(service)} />
          ))}
        </div>
      </div>
      {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
    </section>
  );
};

export default Services;
