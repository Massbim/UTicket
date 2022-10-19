import React, { useEffect, 
  // useState
 } from 'react'
import './trend.module.css'
import more from '../../assets/img/home/more-btn.svg'
// import japan from "../../assets/images/japan.svg";
import styles from './trend.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { DestinationAction } from '../../config/redux/actions/destinationAction'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import "./styles.css";


function Trending() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.destination);
  console.log(datas)
  useEffect(() =>{
    dispatch(DestinationAction({limit: 5}))
  }, [])
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
    
  
  // });
  return (
    <div className={`container mt-5`}>
        <span className={`ms-2 ${styles.color} fs-bold fs-5`}>TRENDING</span>
        <div className={`fs-3 fw-bold ms-2 my-3`}>
          <span>Trending destinations</span>
        </div>
        <div className={styles.cards}>
        {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation= {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > */}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          {datas?.data?.map((item, index) => {
            return(
              // <SwiperSlide>
                <div className={styles.card} key={index}>
                <p>{item.airport_arrive_city}, </p>
                <div className={styles.detail}>
                    <span>{item.airport_arrive_country}</span>
                    <div className=''>
                        <Image src={more} alt=''/>
                    </div>
                </div>
              </div>

              // {/* </SwiperSlide> */}
            )
          })
          }
        
      {/* </Swiper> */}
        </div>
      </div>
  )
}

export default Trending;