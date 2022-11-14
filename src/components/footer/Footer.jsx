import React from 'react'
import './footer.css'

import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaArtstation } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Moheshaa</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>

                <li><a href='#contact'>Contact</a></li>
            </ul>


            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/moheshaa-bajpai-9479311a9/" target="_blanc"><BsLinkedin /></a>
                <a href="https://github.com/Moheshaa" target="_blanc"><BsGithub /></a>
                <a href="https://moheshaa.artstation.com/" target="_blanc"><FaArtstation /></a>
            </div>


            <div className="footer__copyright">
                <small>&copy; Moheshaa. All rights reserved </small>
            </div>
        </footer>
    )
}

export default Footer