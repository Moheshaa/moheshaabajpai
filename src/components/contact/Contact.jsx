import React from 'react'
import './contact.css'

import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c3z96bl', 'template_frv2l4g', form.current, 'Syg3EPw6ASErEfxWs')

        e.target.reset()
    };


    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>{/* container */}

                    <article className='contact__option'>{/* cont */}
                        <MdEmail className='contact__option-icon' />
                        <h4>YouTube</h4>
                        <h5>Moheshaa</h5>
                        <a href="https://www.youtube.com/channel/UCWJwFn69hiKXdY_8awajj0Q" target='_blank'>Subscribe!</a>
                    </article>


                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Moheshaa Bajpai</h5>
                        <a href='https://www.linkedin.com/in/moheshaa-bajpai-9479311a9/' target='_blank'>Let's Connect</a>
                    </article>


                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>See you around the gram!</h5>
                        <a href='https://www.instagram.com/the_messy.palette/' target='_blank'>@the_messy.palette</a>
                    </article>

                </div>



                {/*end of contact options*/}

                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn-two'>Send Message</button>


                </form>

            </div>

        </section >
    )
}

export default Contact