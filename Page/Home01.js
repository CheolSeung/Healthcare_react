import {Link} from 'react-router-dom';
import "../css/Home_01.css";
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react'
// import '../css/Test_Explanation.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Home(){
    
    const nav = useNavigate();

    // const Testexplan = (event) => {
    //     nav('/Test_Explanation')
    // }

    const Testpage = (event) => {
        nav('/TestChart')
    }
    return(
        <>
            <div className="home_all">
                <div className="Home_img">
                    <img src="../image/Home_04.png"></img>
                </div>
                <div className='home_form'>
                <div className="home1_form">
                    <h1>의사와 환자 모두 편리한 <br></br>당뇨 진단 서비스를 제공합니다.</h1>
                    <h5>간편하게 환자의 생체데이터를 수집해 혈당을 측정하고 측정된 혈당으로 실시간 당뇨 진단이 가능합니다.</h5>
                    <h5>당뇨 검사를 위한 환자에게 부담이 가지 않고 편리할 뿐 아니라 의사도 간편하게 당뇨 진단을 할 수 있는 서비스를 제공하고 있습니다.</h5>      
                    <button className="home_btn" onClick={Testpage}>혈당 검사 시작</button>
                </div>
                {/* <div className="home2_form">
                </div> */}

                </div>
                <div className='bloth'></div>
                <div className='home_container'>
                    <div className='slide01'>
                        <Swiper
                        modules={[Navigation, Pagination,A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        /* pagination={{ clickable: false }}
                        scrollbar={{ draggable: false }} */
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide><img src='../image/service_01.jpg' className='img01'></img></SwiperSlide>
                        <SwiperSlide><img src='../image/service_02.jpg' className='img02'></img></SwiperSlide>
                        <SwiperSlide><img src='../image/service_01.jpg' className='img03'></img></SwiperSlide>
                        <SwiperSlide><img src='../image/service_02.jpg' className='img04'></img></SwiperSlide>
                    {/*  ... */}
                        </Swiper>
                    </div>
                </div>   
                <div className="charfooter">
                <hr/>
                <p className="chartfooter1">
                    &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                </p>
                </div>
            </div>
            
            {/* 하단 */}
        </>
    )
}

export default Home;
