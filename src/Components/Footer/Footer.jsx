import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto p-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">
            <Link to="/" className="hover:text-yellow-300">
            Khana-<span className="text-yellow-300">Khazana</span>
            </Link>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
          <div className="flex space-x-4 mb-4 md:mb-0">
  <Link to="/" className="hover:text-yellow-300">
    Home
  </Link>
  <Link to="/recipe" className="hover:text-yellow-300">
    Recipes
  </Link>
  <Link to="/about" className="hover:text-yellow-300">
    About
  </Link>
  <Link to="/contact" className="hover:text-yellow-300">
    Contact
  </Link>
</div>
            
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.325 24h11.482v-9.294H9.693v-3.622h3.113V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.794.143v3.24h-1.916c-1.504 0-1.794.715-1.794 1.76v2.31h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.954-2.173-1.548-3.591-1.548-2.717 0-4.92 2.201-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.719-2.162-10.148-5.144-.422.722-.664 1.562-.664 2.457 0 1.692.865 3.184 2.176 4.063-.803-.026-1.561-.247-2.23-.616v.062c0 2.362 1.675 4.337 3.899 4.784-.408.11-.839.17-1.283.17-.314 0-.617-.03-.916-.086.617 1.926 2.415 3.324 4.543 3.362-1.665 1.305-3.757 2.083-6.033 2.083-.39 0-.779-.023-1.17-.066 2.153 1.381 4.711 2.188 7.456 2.188 8.946 0 13.838-7.404 13.838-13.838 0-.21 0-.42-.015-.63.946-.683 1.767-1.542 2.415-2.515z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.976 1.243 2.243 1.305 3.609.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.976.975-2.243 1.243-3.609 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.976-1.243-2.243-1.305-3.609-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.976-.975 2.243-1.243 3.609-1.305 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.012-4.947.072-1.61.071-3.064.473-4.256 1.664C1.472 2.064 1.07 3.518 1 5.128.94 6.408.928 6.818.928 12s.012 5.592.072 6.872c.071 1.61.473 3.064 1.664 4.256 1.191 1.191 2.645 1.593 4.256 1.664 1.28.06 1.69.072 4.947.072s3.667-.012 4.947-.072c1.61-.071 3.064-.473 4.256-1.664 1.191-1.191 1.593-2.645 1.664-4.256.06-1.28.072-1.69.072-4.947s-.012-3.667-.072-4.947c-.071-1.61-.473-3.064-1.664-4.256C19.064 1.472 17.61 1.07 16 1c-1.28-.06-1.69-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.991 3.991 0 110-7.982 3.991 3.991 0 010 7.982zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-4 border-t border-green-500 pt-4">
          © {new Date().getFullYear()} Khana-Khazana. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
export  default Footer