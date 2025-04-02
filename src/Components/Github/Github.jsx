import React from 'react';
import useTitle from '../../hooks/useTitle';

const GitHub = () => {
    useTitle('GitHub - Khana Khazana');
    return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center shadow-md mx-auto my-6 max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800">Find Us on GitHub</h2>
            <p className="mt-2 text-gray-600">
                Explore our recipe website's source code, contribute to the project, and help us improve!
            </p>
            <a 
                href="https://github.com/SushantaaCSE/Khana-Khazana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
            >
                Visit our GitHub Repository
            </a>
        </div>
    );
};

export default GitHub;