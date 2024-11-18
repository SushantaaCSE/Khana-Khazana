// LandingPage.js
import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800">Discover Delicious Recipes</h1>
                        <p className="text-lg text-gray-600 mt-4">
                            Explore a world of flavors with our curated collection of recipes from around the globe.
                        </p>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-6">
                            Get Started
                        </button>
                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <img src="https://via.placeholder.com/400" alt="Food Image" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800">Featured Recipes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://via.placeholder.com/300" alt="Recipe" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Delicious Pasta</h3>
                                <p className="text-gray-600">A simple yet delicious pasta recipe.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://via.placeholder.com/300" alt="Recipe" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Tasty Tacos</h3>
                                <p className="text-gray-600">Spicy and flavorful tacos that everyone will love.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://via.placeholder.com/300" alt="Recipe" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Chocolate Cake</h3>
                                <p className="text-gray-600">Indulge in this rich and moist chocolate cake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;