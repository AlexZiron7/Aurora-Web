
import React, { useEffect } from 'react';
import type { PortfolioItem } from '../types';
import { CloseIcon } from './icons/GenericIcons';

interface PortfolioModalProps {
  project: PortfolioItem;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
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

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-light-card dark:bg-dark-card rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-light-text dark:text-dark-text hover:text-aurora-yellow transition-colors z-10 bg-light-card/50 dark:bg-dark-card/50 rounded-full p-1"
          aria-label="Close project details"
        >
          <CloseIcon className="w-8 h-8" />
        </button>
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-xl" />
        <div className="p-8">
            <p className="font-semibold text-aurora-yellow mb-2">{project.category}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-light-title dark:text-dark-title mb-4">{project.title}</h3>
            <div className="text-light-text dark:text-dark-text text-base leading-relaxed">
                <p>{project.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
