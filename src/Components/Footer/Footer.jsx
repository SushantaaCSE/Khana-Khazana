// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">About Us</h2>
                        <p className="mt-2">
                            Welcome to Khana Khazana! We share delicious recipes from around the world.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Quick Links</h2>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                            <li><a href="/recipe" className="hover:text-yellow-500">Recipes</a></li>
                            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
                            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Follow Us</h2>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="hover:text-yellow-500">Facebook</a>
                            <a href="#" className="hover:text-yellow-500">Twitter</a>
                            <a href="#" className="hover:text-yellow-500">Instagram</a>
                            <a href="https://github.com/SushantaaCSE/Khana-Khazana" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">GitHub</a>
                           
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Khana Khazana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;