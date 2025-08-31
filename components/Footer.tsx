import React from 'react';

// Icons defined locally to avoid creating new files, as per constraints.
const VisaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="currentColor" {...props}>
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#333"/>
      <path d="M12.9 6.6H9.7l-3 10.8h3.2l.6-2.4h3.3l.4 2.4h3.2L12.9 6.6zm-1.6 6.3l1-4.2 1 4.2h-2zM21.5 6.6h-3.1v10.8h3.1c1.8 0 3.1-1.4 3.1-3.2s-1.4-3.2-3.1-3.2c.7 0 1.3-.6 1.3-1.4 0-1-.8-1.7-1.8-1.7zm-1.1 5.4h1.1c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1h-1.1v-2.2zm0-3.5h.9c.5 0 .9.4.9.9s-.4.9-.9.9h-.9V8.5zM30.6 6.6h-2.1l-2.4 7.2-2.3-7.2h-2.1l3.4 10.8h2.1l3.4-10.8z"/>
    </svg>
  );
  
  const MastercardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none" {...props}>
        <rect width="38" height="24" rx="3" fill="#333"/>
        <circle cx="15" cy="12" r="7" fill="#EB001B"/>
        <circle cx="23" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8"/>
    </svg>
  );
  
  const PayPalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none" {...props}>
        <rect width="38" height="24" rx="3" fill="#333"/>
        <path d="M11.233 7.078c.28.007.514.07.702.19.027.017.04.043.037.07l-.234 1.458c-.004.025.01.05.033.06.49.23 1.055.358 1.696.358h.04c2.622 0 4.11-1.503 3.65-4.34-.343-2.115-2.2-3.37-4.49-3.37H9.71L8.52 16.92c-.01.076.06.136.136.12l1.242-.196c.05-.008.086-.056.096-.107l.21-1.31.025-.152.002-.012.355-2.214c.054-.337.33-.585.67-.585h.23c.39 0 .692.29.62.68l-.48 2.992c-.01.08.06.14.14.12l1.23-.2c.05-.007.086-.056.096-.106l.21-1.31.023-.15.003-.013.356-2.215c.054-.336.33-.584.67-.584h.06c2.12 0 3.33-1.078 3.58-3.03.22-1.7-1-2.8-2.73-2.8h-1.2c-.39 0-.71.28-.75.67l-.28 1.762z" fill="#009cde"/>
        <path d="M21.418 9.24c-.344-2.114-2.2-3.37-4.49-3.37h-2.96L12.78 16.92c-.01.076.06.136.136.12l1.242-.196c.05-.008.086-.056.096-.107l.21-1.31.025-.152.002-.012.355-2.214c.054-.337.33-.585.67-.585h.23c.39 0 .692.29.62.68l-.48 2.992c-.01.08.06.14.14.12l1.23-.2c.05-.007.086-.056.096-.106l.21-1.31.023-.15.003-.013.356-2.215c.054-.336.33-.584.67-.584h.06c2.12 0 3.33-1.078 3.58-3.03.22-1.7-1-2.8-2.73-2.8h-1.2c-.39 0-.71.28-.75.67l-.28 1.762a.723.723 0 00.71.81h.52c1.2 0 1.9.59 1.75 1.63-.12.87-.9 1.4-1.93 1.4h-.54c-.39 0-.71.28-.75.67l-.48 2.99c-.01.077.06.137.136.12l1.24-.2c.05-.008.086-.056.097-.106l.49-3.04z" fill="#003087"/>
    </svg>
  );

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Aurora Devs */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-light-title dark:text-dark-title">Aurora Devs</h3>
            <p className="max-w-xs">Impulsando la innovación digital con soluciones creativas y tecnológicas a medida.</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-light-title dark:text-dark-title">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-aurora-yellow transition">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-aurora-yellow transition">Portafolio</a></li>
              <li><a href="#contact" className="hover:text-aurora-yellow transition">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-light-title dark:text-dark-title">Contáctanos</h3>
            <ul className="space-y-2">
              <li><a href="mailto:Info@auroradevs.com" className="hover:text-aurora-yellow transition">Info@auroradevs.com</a></li>
              <li><p>+34 912 34 56 78</p></li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-light-title dark:text-dark-title">Métodos de Pago</h3>
            <div className="flex items-center space-x-2">
                <VisaIcon aria-label="Visa"/>
                <MastercardIcon aria-label="Mastercard"/>
                <PayPalIcon aria-label="PayPal"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-bg dark:bg-dark-bg py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Aurora Devs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;