import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Footer = () => {

    return (
        <footer>
        <div className="col-1">
            <h3>Pages</h3>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/blog">Blog</a>
        </div>
        
        <div className='col-2'>
            <h3>Get in Touch</h3>
            
            <form>
                <label>Text</label>
                <input 
                    type="text"
                />
            </form>
            <form>
                <label>Email</label>
                <input 
                required
                />
            </form>
            <button>Send</button>
        </div>

        <div className="col-3">
            <h3>Contact</h3>
            <p>Deah Raya, Syiah Kuala</p>
            <div className="social-icon">
                <i>< FontAwesomeIcon icon={faInstagram} href="#" /></i>
                <i>< FontAwesomeIcon icon={faLinkedin} href="#" /></i>
                <i>< FontAwesomeIcon icon={faGithub} href="#" /></i>
                <i>< FontAwesomeIcon icon={faDiscord} href="#" /></i>          
            </div>
        </div>
        
        </footer>
    );

     
}

export default Footer;