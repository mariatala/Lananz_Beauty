import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-400 border-b-2 border-black text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Lananz Beauty. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://www.instagram.com/lananz_beauty" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;