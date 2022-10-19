import Image from 'next/image';
import React, { useEffect, 
  // useState 
} from 'react'
import styles from './top.module.css';
// import axios from 'axios';
// import btnPrev from '../../assets/logo/logo-prev.svg'
// import btnback from '../../assets/logo/logo-back.svg'
import { useDispatch, useSelector } from 'react-redux';
import { DestinationAction } from '../../config/redux/actions/destinationAction'
import { Navigation, Pagination, 
  // Scrollbar, A11y
 } from 'swiper';

import { Swiper, SwiperSlide, 
  // useSwiper
 } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TopTen({src, 
  // title
}) {
  // const swiper = useSwiper();
    const dispatch = useDispatch();
    const datas = useSelector((state) => state.destination);
    console.log(datas)
    useEffect(() =>{
      dispatch(DestinationAction({limit: 5}))
    }, [])

  return (
    <div className={styles["top-destination"]}>
    <div className={`d-flex row text-center aligns-items-center my-5`}>
      <p className='fs-6 fw-semibold'>TOP 10</p>
      <p className='fs-3 fw-bold'>Top 10 destinations</p>
    </div>
    <div className={styles["topten-img"]}>
    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        // navigation= {{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        className="mySwiper"
      >
        {datas?.data?.map((item, index) => (
          
            <SwiperSlide key={index}>
              <div className={`mt-4`} key={index}>
                  <div className={`${styles.container_img}`}>
                      <Image src={src} alt="" className={`${styles.img}`}/>
                  </div>
                  <span>{item.airport_arrive_city}</span>
              </div>
            </SwiperSlide>
          
            ))
        }
            {/* <div className="boxOfBtn w-100">
            <button className="btnNextBlue swiper-button-prev">
              <Image src={btnback} alt="" className="btnImg" />
            </button>
            <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
            <button className="btnPrevious swiper-button-next">
              <Image src={btnPrev} alt="" />
            </button>
          </div> */}
      </Swiper>
    </div>

  </div>

  )
}

export default TopTen;