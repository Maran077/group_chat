import React, { useState } from 'react';

const BurgerMenu = ({ setShowRoom }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setShowRoom(isOpen);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                className="block sm:hidden focus:outline-none -mb-2"
            >
                <div className="w-8 h-8" onClick={toggleMenu}>
                    <span
                        className={`block bg-black w-full h-1 rounded mb-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1' : ''
                            }`}
                    />
                    <span
                        className={`block bg-black w-full h-1 rounded mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block bg-black w-full h-1 rounded transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''
                            }`}
                    />
                </div>
            </button>
        </div>
    );
};

export default BurgerMenu;
