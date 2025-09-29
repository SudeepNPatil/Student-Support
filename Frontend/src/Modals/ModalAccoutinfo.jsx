import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

const ModalAccountinfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute rounded-lg shadow-xl bg-white border flex w-40 h-auto px-2 py-2 flex-col z-50 xs:-bottom-36 xs:right-48 -bottom-52 right-1 animate-bounceIn">
      <RxCross2
        onClick={onClose}
        className="absolute right-2 top-2 text-lg"
      ></RxCross2>
      {children}
    </div>
  );
};

export default ModalAccountinfo;
