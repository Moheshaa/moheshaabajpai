import React from 'react'
import './experience.css'
import { BsCheckAll } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have </h5>
            <h2>My Experiences</h2>


            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Technical Skills</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div>
                                <h4>HTML/CSS</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div><h4>JavaScript</h4>
                                {/* <small className='text-light'>experienced</small>*/}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div><h4>C/C++</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div><h4>Python</h4>
                                {/* <small className='text-light'>experienced</small>*/}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div><h4>Lua</h4>
                                {/* <small className='text-light'>experienced</small>*/}
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Creative Skills</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div>
                                <h4>2D/3D Game Dev</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div>
                                <h4>Concept Art</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div>
                                <h4>UI/UX</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div>
                                <h4>Vector Illustrations</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsCheckAll className='experience__details-icon' />
                            <div>
                                <h4>Video Editing</h4>
                                {/* <small className='text-light'>experienced</small> */}
                            </div>
                        </article>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default Experience