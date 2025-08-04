// src/components/ContactModal.tsx

// This is a client component because it uses event handlers (onClose, onSubmit)
"use client";

// Define the component's props interface
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // If the modal isn't open, render nothing.
  if (!isOpen) return null;

  return (
    // Main container with a semi-transparent backdrop
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
      {/* The actual modal panel */}
      <div className="bg-gray-800 rounded-lg p-8 max-w-lg w-full relative border border-teal-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          × {/* This is an "X" character */}
        </button>

        <h2 className="text-2xl font-bold mb-4 text-white">Project Inquiry</h2>
        <p className="text-gray-400 mb-6">Please provide some details about your project. I'll respond within 24 hours.</p>

        {/* Formspree Form */}
        <form action="https://formspree.io/f/mqaldozo" method="POST">
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Project Details</label>
            <textarea id="message" name="message" rows={4} required className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
          </div>

          <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-teal-600 transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}