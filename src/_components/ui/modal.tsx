'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    function handleClickOutside(event: MouseEvent) {
      const modal = document.querySelector('.modal');
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 bg-gray-600/30 z-50 flex justify-center">
      <div className="modal bg-bone p-6 rounded-lg shadow-lg relative w-lg h-1/3 mt-32">
        <button
          className="absolute top-6 right-6 hover:cursor-pointer"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
