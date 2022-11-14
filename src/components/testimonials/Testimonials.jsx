import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        avatar: AVTR1,
        name: 'hello World Anonymous',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim fugit, fugiat repudiandae eius itaque quasi aliquid nobis quos, vel impedit aperiam suscipit iure doloribus harum a illum est in praesentium.'
    },

    {
        avatar: AVTR2,
        name: 'hello World Anonymous',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim fugit, fugiat repudiandae eius itaque quasi aliquid nobis quos, vel impedit aperiam suscipit iure doloribus harum a illum est in praesentium.'
    },

    {
        avatar: AVTR3,
        name: 'hello World Anonymous',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim fugit, fugiat repudiandae eius itaque quasi aliquid nobis quos, vel impedit aperiam suscipit iure doloribus harum a illum est in praesentium.'
    },

    {
        avatar: AVTR4,
        name: 'hello World Anonymous',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim fugit, fugiat repudiandae eius itaque quasi aliquid nobis quos, vel impedit aperiam suscipit iure doloribus harum a illum est in praesentium.'
    }
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>
                Testimonials
            </h2>

            <Swiper className='container testimonials__container'

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
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt={name} />
                                </div>

                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default Testimonials