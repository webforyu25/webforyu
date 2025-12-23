// components/Footer.tsx
import React, { useEffect, useState } from 'react';
import './footer.css'; 

const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;  // Current vertical scroll position
      const windowHeight = window.innerHeight; // Height of the viewport
      const docHeight = document.body.scrollHeight; // Total height of the document

      // Check if the user is near the bottom of the page, if so, show the footer
      if (scrollY + windowHeight >= docHeight - 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // clean event listener to avoid memory leaks
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${visible ? 'show' : 'hide'}`}>
      <div className='footer-container'>
<div className='footer-line'></div>

      <div className='footer-textcontainer'>
       <div className="footer-left">© WebForYu LLC.</div>
      <div className="footer-links">
        {/* <a href="/careers">Careers</a> */}
        <a href="/product">Product</a>
        <a href="/aboutus">About Us</a>

           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=webforyu25@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">Contact Us</a>
                 

        
      </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
