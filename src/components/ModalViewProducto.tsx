// components/ModalViewProducto.tsx
'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/ModalViewProducto.css';


type ModalViewProductoProps = {
  children: ReactNode;
  onClose: () => void;
};

const ModalViewProducto = ({ children, onClose }: ModalViewProductoProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalViewProducto;
