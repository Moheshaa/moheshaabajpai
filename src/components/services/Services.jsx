import React from 'react'
import './services.css'
import { BsCheckCircle } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service__card'>
                    <h3>
                        UI/UX Design
                    </h3>
                    <small>frontend designs</small>
                </article>

                <article className='service__card'>
                    <h3>
                        Web Development
                    </h3>
                    <small>Frontend Development</small>
                </article>

                <article className='service__card'>
                    <h3>
                        Graphic Designing
                    </h3>
                    <small>Logo, Branding, posters, video editing</small>
                </article>

                <article className='service__card'>
                    <h3>
                        Game Development
                    </h3>
                    <small>2D/3D, mobile and web games</small>
                </article>

                <article className='service__card'>
                    <h3>
                        Illustrations
                    </h3>
                    <small>vector illustrations</small>
                </article>

                <article className='service__card'>
                    <h3>
                        Concept Art
                    </h3>
                    <small>digital art</small>
                </article>


            </div>
        </section>
    )
}

export default Services