// About.js
import React from 'react';
import {useNavigate} from "react-router-dom"

const About = () => {
    const navigate=useNavigate();
    const handleButtonClick=()=>{
        navigate('/contact')
    }
    
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
                    <h2 className="text-2xl font-semibold text-gray-800"> What You’ll Find on Our Site</h2>
                    <p className="text-gray-600 mt-2">
  <ul>
    <li><strong>Tasty Recipes:</strong> A wide range of recipes from breakfast to dessert, designed to inspire and help you create meals you'll love.</li>
    <li><strong>Step-by-Step Instructions:</strong> Clear, easy-to-follow recipes with helpful tips and tricks for success.</li>
    <li><strong>Nutritional Information:</strong> We include nutritional facts to help you make healthier meal choices.</li>
    <li><strong>Meal Planning & Tips:</strong> Helpful advice for busy weeks and using leftovers to minimize waste.</li>
    <li><strong>Favorite Tools & Ingredients:</strong> Our top picks for kitchen essentials and pantry must-haves.</li>
  </ul>
</p>

                </div>
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Get Involved!</h2>
                <p className="text-gray-600 mt-2">
                    We would love to hear from you! Share your favorite recipes or reach out with any questions.
                </p>
                <button onClick={handleButtonClick} className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default About;