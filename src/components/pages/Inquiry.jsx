import React, { useEffect } from 'react';

const Inquiry = () => {
    useEffect(() => {
        // WhatsApp number with country code (without + and spaces)
        const phoneNumber = '918533915030';
        // Optional pre-filled message
        const message = 'Hello! I would like to make an inquiry.';

        // Redirect to WhatsApp using replace() to avoid adding to browser history
        // This allows the back button to work properly
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.replace(whatsappUrl);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002147] to-[#001a35]">
            <div className="text-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 mx-auto mb-6"></div>
                <h2 className="text-2xl font-bold mb-2">Redirecting to WhatsApp...</h2>
                <p className="text-gray-300">Please wait while we connect you to our team.</p>
            </div>
        </div>
    );
};

export default Inquiry;
