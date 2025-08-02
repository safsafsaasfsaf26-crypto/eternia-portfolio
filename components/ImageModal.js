import { useEffect } from 'react';

export default function ImageModal({ src, alt, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(10,15,19,0.97)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'zoom-out'
    }} onClick={onClose}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '90vw',
          maxHeight: '80vh',
          borderRadius: '12px',
          boxShadow: '0 0 32px #00d0ffcc',
          background: '#111',
          border: '2px solid #39ff14',
          objectFit: 'contain',
          cursor: 'zoom-out'
        }}
      />
    </div>
  );
}
