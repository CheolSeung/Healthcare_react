import React from "react"
// import {Link} from 'react-router-dom';
import "../css/Home.css";
import { useNavigate } from 'react-router-dom';


function Home(){
    
    const nav = useNavigate();

    const Testexplan = (event) => {
        nav('/Test_Explanation')
    }

    const Testpage = (event) => {
        nav('/Test')
    }
    return(

        <div className="home_all">
            <div className="Home_img">
                <img src="../image/Home_img.png"></img>
            </div>
            <div className="home1_form">
                <h1>AI 당뇨 진단 및</h1>
                <h1>환자 케어 시스템</h1>
                <h5>효과적인 당뇨 진단 서비스와 더불어</h5>
                <h5>환자 케어 관리가 가능한 서비스를 제공합니다.</h5>        
            </div>
            <div className="home2_form">
                <button className="home_btn" onClick={Testexplan}>검사원리</button>
                <button className="home_btn" onClick={Testpage}>Test</button>
            </div>
        </div>


    )
}

export default Home;
