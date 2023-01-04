import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineCopyright } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <h5>Follow us!</h5>
        <div className={styles.react_icons}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={styles.circle}>
            <AiOutlineFacebook size="1.5em" color="#545863" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={styles.circle}>
            <AiOutlineInstagram size="1.5em" color="#545863" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className={styles.circle}>
            <AiOutlineTwitter size="1.5em" color="#545863" />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" className={styles.circle}>
            <BsPinterest size="1.5em" color="#545863" />
          </a>
        </div>
        <div className={styles.copyright}><AiOutlineCopyright color="#545863"/> 2023 kookies.</div>
      </div>
    </footer>
  );
};

export default Footer;
