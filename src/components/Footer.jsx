import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-[#f0f0f0] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@financialzone.com</p>
            <p>Phone: +1 555 123 4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><Link to="#">Facebook</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">LinkedIn</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Advertise</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 The Financial Zone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
