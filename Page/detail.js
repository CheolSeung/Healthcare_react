import React, { useState } from 'react';
import axios from 'axios';
import '../css/detail.css'
import {useSelector}from 'react-redux';

function Detail() {
    
    const [ p_name, setP_name ] = useState('');
    const [ p_birthdate, setP_birthdate ] = useState('');
    const [ p_gender, setP_gender ] = useState('');
    const [ p_phone, setP_phone ] = useState('');
    const [ p_addr, setP_addr ] = useState('');
    const [ h_room, setH_room ] = useState('');
    const uid = useSelector((state)=>state.uid);

    axios.post('http://127.0.0.1:3001/patientDetail',{
        uid:uid
    })
    .then((res) => {
        setP_name(res.data.name)
        setP_birthdate(res.data.birthdate)
        setP_gender(res.data.gender)
        setP_phone(res.data.phone)
        setP_addr(res.data.addr)
        setH_room(res.data.h_room)
    })
    .catch(() => {
        alert("상세정보 불러오기 에러")
    })

    return (
        <>
        <div className='container'>
            <div className='detail_title'>
                <h1 className = "detail_h1">환자 상세정보</h1>
            </div>
            {/* <div className='btn_container'>
                <button className = "detail_btn">수정</button>
            </div> */}
            <div>
                <table className="detail_table">
                    <tr>
                        <td className="detail_img" rowSpan={4}><img src="../image/face.jpg" alt="사진"></img></td> 
                        <td className="detail_01_public">이름</td>
                        <td className="detail_01">{p_name}</td>
                        <td className="detail_01_public">생년월일</td>
                        <td className="detail_01">{p_birthdate}</td>
                    </tr>
                    <tr>
                        <td className="detail_01_public">연락처</td>
                        <td className="detail_01">{p_phone}</td>
                        <td className="detail_01_public">성별</td>
                        <td className="detail_01">{p_gender}</td>
                    </tr>
                    <tr>
                        <td className="detail_01_public">입원 병실</td>
                        <td className="detail_01" colSpan={3}>{h_room}</td>
                    </tr>
                    <tr>
                        <td className="detail_01_public">주소</td>
                        <td className="detail_01" colSpan={3}>{p_addr}</td>
                    </tr>
                    <tr>
                        <td className='detail_02' colSpan={5} rowSpan={2}>1. 당뇨 위험 판정(2022.12.12) -&gt; (혈당 관리 필요 공복 평균 :  123(mg/dl, 식후 평균 : 205mg/dl)) <br></br>
                            2. 상기환자 2018-11-12 입원하여 복강경하 자궁근종 절제술 시행받고 2018-11-15 퇴원하였음. 조직검사상 상기 병명으로 확인되었음.<br></br>
                            3. 이전병원 의무기록지 환자 개인이 보관중. 3차 병원에 갈 경우에는 진료의뢰서 필요. <br></br>
                            4. 본원에서 시행핝 혈액검사 및 영상학적 검사상 당뇨가 의심되어 이에 대한 추가적인 진료 필요.<br></br>
                            5. 다리 골절로 인해 타병원에서 진료중. 출혈 조장을 유발할 수 있는 아스피린 복용중.<br></br>
                            6. 타이레놀이알서방정, 리나치올캅셀500mg, 유코라제정, 코데농정, 코데나에스 복용중.<br></br></td>
                    </tr>
                </table>
            </div>
            <div className="charfooter">
                <hr/>
                <p className="chartfooter1">
                    &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                </p>
            </div>
        </div>
        </>
    )
}

export default Detail;
