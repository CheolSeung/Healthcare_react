import React from "react";
import '../css/TestResult.css';
import {useNavigate} from 'react-router-dom';
import { FiAlertTriangle } from "react-icons/fi";


function TestResult(){

    const nav = useNavigate();

    const management = () => {
        nav('/management')
    }

    return(
        <>
        <div className="result_bg">
            <div className="result_container">
                <div className="result_left">
                    <h1>김새봄님의 혈당 수치</h1>
                    <hr className="my_hr"></hr>
                    <h2 className="bs_level">200 (mg/dL)</h2>
                    <div className="danger_h2">
                        <FiAlertTriangle className="danger"></FiAlertTriangle>
                        <h2>매우 위험 상태</h2>
                    </div>
                    <div className="p_set">
                        <p>당뇨는 각종&nbsp;</p>
                        <p className="Red">합병증을 유발</p>
                        <p>하며,&nbsp;</p>
                        <p className="Red">생명의 위협</p>
                        <p>도 줄 수 있습니다.</p> 
                        <p>이는 각별한 주의가 필요하며 철저한 관리도 필요합니다</p>
                    </div>
                </div>
                {/* 오른쪽 */}
                <div className="result_right">
                    <img className="chart_img" src="../image/TestChart.png"></img>
                    <p>평균보다&nbsp;</p>
                    <p className="Red">높음&nbsp;</p><p>/</p>
                    <p className="Blue">낮음&nbsp;</p><p>/</p>
                    <p className="Green">평균</p>
                    <div>
                        <button onClick={management}>당뇨 관리 방법</button>
                    </div>
                </div>
            </div>
            {/* 하단 */}
            <div className="TestResult_charfooter">
                <hr/>
                <p className="TestResult_chartfooter1">
                    &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                </p>
            </div>
        </div>    
        </>
    )
}

export default TestResult;
