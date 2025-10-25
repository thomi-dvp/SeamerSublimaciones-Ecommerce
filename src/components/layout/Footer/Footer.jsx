import React from 'react';
import './Footer.css';
import CompanyInfo from './CompanyInfo';
import CustomerHelp from './CustomerHelp';
import FooterBottom from './FooterBottom';
import PaymentMethods from './PaymentMethods';

const Footer = () => {
  return (
    <footer className="footer-sublimacion">
      <div className="footer-container">
        <CompanyInfo />
        <PaymentMethods />
        <CustomerHelp />
      </div>
      <FooterBottom />
    </footer>
  );
};    

export default Footer;