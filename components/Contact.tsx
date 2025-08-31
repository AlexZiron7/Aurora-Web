
import React, { useState } from 'react';
import { EmailIcon, InstagramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert('Formulario enviado (simulación). ¡Gracias por contactarnos!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-title dark:text-dark-title">Contáctanos</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-light-text dark:text-dark-text">¿Tienes un proyecto en mente? Hablemos de cómo podemos ayudarte.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-3 bg-light-card dark:bg-dark-card rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-light-title dark:text-dark-title">Enviar un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Nombre</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aurora-yellow focus:border-aurora-yellow transition"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Correo Electrónico</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aurora-yellow focus:border-aurora-yellow transition"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Asunto</label>
                <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aurora-yellow focus:border-aurora-yellow transition"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Mensaje</label>
                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-aurora-yellow focus:border-aurora-yellow transition"></textarea>
              </div>
              <button type="submit" className="bg-aurora-yellow text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105" aria-label="Send your message">Enviar Mensaje</button>
            </form>
          </div>
          
          {/* Info Card */}
          <div className="lg:col-span-2 bg-light-card dark:bg-dark-card rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-light-title dark:text-dark-title">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                  <EmailIcon className="w-6 h-6 text-aurora-yellow mt-1"/>
                  <div>
                      <h4 className="font-bold text-light-title dark:text-dark-title">Correo Electrónico</h4>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-light-text dark:text-dark-text hover:text-aurora-yellow transition">{CONTACT_INFO.email}</a>
                  </div>
              </div>
              <div className="flex items-start space-x-4">
                  <WhatsAppIcon className="w-6 h-6 text-aurora-yellow mt-1"/>
                  <div>
                      <h4 className="font-bold text-light-title dark:text-dark-title">Teléfono</h4>
                      <p className="text-light-text dark:text-dark-text">{CONTACT_INFO.phone}</p>
                  </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-4 justify-center">
                    <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-light-bg dark:bg-dark-bg rounded-full text-light-text dark:text-dark-text hover:text-aurora-yellow hover:bg-gray-200 dark:hover:bg-gray-600 transition" aria-label="Visit our Instagram page">
                        <InstagramIcon className="w-6 h-6"/>
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="p-3 bg-light-bg dark:bg-dark-bg rounded-full text-light-text dark:text-dark-text hover:text-aurora-yellow hover:bg-gray-200 dark:hover:bg-gray-600 transition" aria-label="Send us an email">
                        <EmailIcon className="w-6 h-6"/>
                    </a>
                    <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-light-bg dark:bg-dark-bg rounded-full text-light-text dark:text-dark-text hover:text-aurora-yellow hover:bg-gray-200 dark:hover:bg-gray-600 transition" aria-label="Chat with us on WhatsApp">
                        <WhatsAppIcon className="w-6 h-6"/>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;