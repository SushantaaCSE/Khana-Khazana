// About.js
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-4 text-center">
                Welcome to Khana Khazana, your go-to destination for discovering and sharing delicious recipes from around the world!
            </p>
            <p className="text-lg text-gray-600 mb-4 text-center">
                Our mission is to inspire home cooks and food enthusiasts to explore new flavors and create unforgettable meals for their families and friends.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-6 mt-8">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                    <p className="text-gray-600 mt-2">
                        We believe that cooking should be fun, easy, and accessible to everyone. Whether you're a novice or an experienced chef, we have something for you!
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Join Our Community</h2>
                    <p className="text-gray-600 mt-2">
                        Connect with fellow food lovers, share your own recipes, and discover tips and tricks to elevate your cooking skills.
                    </p>
                </div>
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Get Involved!</h2>
                <p className="text-gray-600 mt-2">
                    We would love to hear from you! Share your favorite recipes or reach out with any questions.
                </p>
                <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default About;