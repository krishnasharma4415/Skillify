import React from 'react';

function Popup({ children, onClose }) {
  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-95 flex justify-center items-center" onClick={handleClose}>
      <div className="dark:bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-md">{children}</div>
    </div>
  );
}

export default Popup;
