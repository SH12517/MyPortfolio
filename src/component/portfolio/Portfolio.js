import React from 'react'
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../images/sidebar.png'
import Ecommerce from '../../images/ecommerce.png'
import HOC from '../../images/hoc.png'
import Musicapp from '../../images/musicapp.png'
import 'swiper/css'

export const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
    <span>Recent Projects</span>
    <span>Portfolio</span>


    <Swiper spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'>

        <SwiperSlide>
            <img src={Sidebar}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={HOC}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Musicapp}/>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}
