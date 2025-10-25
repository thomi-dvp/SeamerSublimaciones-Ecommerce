import React from 'react';
import PaymentMethods from './PaymentMethods';
import LegalLinks from './LegalLinks';
 
const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-content">
        <p className="copyright">&copy; {new Date().getFullYear()} Seamer Sublimaciones. Todos los derechos reservados.</p>
        <LegalLinks />
      </div>
    </div>
  );
};
 
export default FooterBottom;