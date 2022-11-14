import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-01.png'
import IMG2 from '../../assets/portfolio-02.png'
import IMG3 from '../../assets/portfolio-03.png'
import IMG4 from '../../assets/portfolio-04.png'
import IMG5 from '../../assets/portfolio-05.png'
import IMG6 from '../../assets/portfolio-06.png'
import IMG7 from '../../assets/portfolio-07.png'
import IMG8 from '../../assets/portfolio-08.png'
import IMG9 from '../../assets/portfolio-09.png'
import IMG10 from '../../assets/portfolio-10.png'
import IMG11 from '../../assets/portfolio-11.png'




// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        image: IMG1,
        name: 'REIKA',

    },

    {
        image: IMG2,
        name: 'CYBERPUNK',

    },
    {
        image: IMG3,
        name: 'SUNLIGHT',

    },
    {
        image: IMG4,
        name: 'FANART',

    },
    {
        image: IMG5,
        name: 'BLOOM',

    },
    {
        image: IMG6,
        name: 'MIST',

    },
    {
        image: IMG7,
        name: 'MIDNIGHT',

    },
    {
        image: IMG8,
        name: 'RAIN',

    },
    {
        image: IMG9,
        name: 'NIGHT BEFORE EXAMS',

    },
    {
        image: IMG10,
        name: 'FANART',

    },
    {
        image: IMG11,
        name: 'THRONE',

    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>

            <h2>
                Portfolio
            </h2>

            <Swiper className='container portfolio__container'

                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {
                    data.map(({ image, name }, index) => {
                        return (
                            <SwiperSlide key={index} className='portfolio'>
                                <div className='port_image'>
                                    <img src={image} alt={name} />
                                </div>

                                <h5 className='img__name'>{name}</h5>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default Portfolio

