import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__box">
        &copy; 2018 Zaprojektowane i zakodowane z
          <span className="footer__icon footer__icon--red"> &#10084; </span>
        przez Tomasza Rybackiego.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
