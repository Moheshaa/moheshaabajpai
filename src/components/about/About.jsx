import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { TbPaint } from 'react-icons/tb'
import { FaBrain } from 'react-icons/fa'
import { GoGear } from 'react-icons/go'

const About = () => {
    return (
        <section id='about'>
            <h5> Get to know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>

                {/* <div className='about__me'>
                    <span></span>
                    <div className='about__me-image'>
                        <img src={ME} alt='my pic' />
                    </div>


                </div> */}


                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <TbPaint className='about__icon' />
                            <h5>Creative</h5>
                            <small>It's all about a different point of view!</small>
                        </article>

                        <article className='about__card'>
                            <FaBrain className='about__icon' />
                            <h5>Imaginative</h5>
                            <small>Sometimes it's okay to daydream!</small>
                        </article>

                        <article className='about__card'>
                            <GoGear className='about__icon' />
                            <h5>Innovative</h5>
                            <small>Tap your brain until that idea strikes!</small>
                        </article>
                    </div>

                    <p>
                        Hey! I am Moheshaa, a student of B.Tech in the field of Information Technology. I am a technovert with some creative sparks going around my brain. I feel that my duality of technology and a creative mindset can brings some really unique and cool ideas to life.
                        We can connect through social media to know each other better!
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About