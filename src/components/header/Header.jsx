import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import BG from '../../assets/bg-03.png'


const Header = () => {


    return (

        <header>

            <div className='container header__container'>
                <h5>Hey! I'm</h5>
                <h1>Moheshaa</h1>
                <h1>Bajpai</h1>

                <CTA />

                <HeaderSocials />

                {/* <div className='me' >
                    <img src={ME} alt="this is me" />
                </div> */}


                {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

            </div>


        </header >
    )
}

export default Header