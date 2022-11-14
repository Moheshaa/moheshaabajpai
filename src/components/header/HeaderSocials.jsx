import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaArtstation } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/moheshaa-bajpai-9479311a9/" target="_blanc"><BsLinkedin /></a>
            <a href="https://github.com/Moheshaa" target="_blanc"><BsGithub /></a>
            <a href="https://moheshaa.artstation.com/" target="_blanc"><FaArtstation /></a>



        </div>
    )
}

export default HeaderSocials