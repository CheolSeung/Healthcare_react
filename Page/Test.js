import React from "react";
import {useNavigate} from 'react-router-dom';
import "../css/Test.css";

function Test () {

    const nav = useNavigate();

    const end_test = () => {
        nav('/TestResult')
    }
    const before_page = () => {
        nav('/testchart')
    }

    return (
        <div className="test_all">
            <div className="test_container">

                {/* 위 */}
                <div className="test_top">
                    <video  className="video_test" muted autoPlay loop>
                        <source src="../Video/test_03.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* 아래 */}
                <div className="test_bot">
                    <div className="test_bot_left">
                        <table>
                            <tr>
                                <td className="table_th">성명</td>
                                <td>김 새 봄</td>
                                <td className="table_th">나이</td>
                                <td>25세</td>
                            </tr>
                            <tr>
                                <td className="table_th">생년월일</td>
                                <td colSpan={3}>1998년&nbsp;&nbsp;03월&nbsp;&nbsp;09일</td>
                            </tr>
                            <tr>
                                <td className="table_memo" colSpan={4} rowSpan={2}>
                                    - &nbsp;상기환자 2018-11-12 입원하여 복강경하 자궁근종 절제술 시행받고 2018-11-15 퇴원<br/>
                                    - &nbsp;이전병원 의무기록지 환자 개인이 보관중. 3차 병원에 갈 경우에는 진료의뢰서 필요<br/>
                                    - &nbsp;다리 골절로 인해 타병원에서 진료중. 출혈 조장을 유발할 수 있는 아스피린 복용중<br/>
                                    - &nbsp;타이레놀이알서방정, 리나치올캅셀500mg, 유코라제정, 코데농정, 코데나에스 복용중
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="test_bot_right">
                        <button className="before_page_btn" onClick={before_page}>이전 페이지</button>
                        <button className="end_test_btn" onClick={end_test}>결과 상세</button>
                    </div>

                </div>
            </div>
            <div className="charfooter">
                <hr/>
                <p className="chartfooter1">
                    &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                </p>
            </div>
        </div>
    )
}

export default Test;
