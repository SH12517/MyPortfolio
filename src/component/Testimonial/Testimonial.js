import React from 'react'
import "./Testimonial.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../images/profile1.jpg"
import profilePic2 from "../../images/profile2.jpg"
import profilePic3 from "../../images/profile3.jpg"
import profilePic4 from "../../images/profile4.jpg"
import Pagination from "../../../node_modules/swiper/modules/pagination.mjs"
import 'swiper/css/pagination'
import 'swiper/css' 

export const Testimonial = () => {
   const clients =[
           {
            img:profilePic1,
           review:"Lorem Ipsum is simply dummy text of the  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
        },
           {
            img:profilePic2,
            review:"Lorem Ipsum is simply dummy text of  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque"
        },
            {
            img:profilePic3,
                review:"Lorem Ipsum is simply dummy text of the  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque"
            },
                {
                    img:profilePic4,
                    review:"Lorem Ipsum is simply dummy text of the  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque"
                }]
    return (
    <div className='t-wrapper' id='Testimonial'>
        <div className='t-heading'>
        <span>Clients always get </span>
        <span>Exeptional Work </span>
        <span> For me...</span>
        <div className='blur t-blur' style={{background:'purple'}}></div>
        <div className='blur t-blur2' style={{background:'skyblue'}}></div>

    </div>
    {/* slider */}
    <Swiper
    modules={[Pagination]}
    slidePrevView={2}
    pagination={{clickable: true}}>
      {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
            <div className='testimonial'>
                <img src={client.img} alt=''/>
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
  )
}
