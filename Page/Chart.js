import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {useDispatch}from 'react-redux';
import '../css/Chart.css'

function Chart(){

    const nav = useNavigate();
    const dispath = useDispatch();
    const [ search_name, search_setName ] = useState('');
    const [ Chart, setChart ] = useState('');

    // 한 번만 실행되게 해놓음
    useEffect(()=>{
        if(localStorage.length == 0) {
            nav("/login")
        } else {
            getChart();
        }
    },[])

    // 추가
    const plus = () => {
        nav('/patient_plus')
    }

    // 상세
    const det_information = (uid) => {
        // axios.post('http://127.0.0.1:3001/patientDetail', {
        //     patient_cd: uid
        // })
        dispath({type:'detail',uid:uid});
        nav("/detail");
    }
    
    // 삭제
    const delete_patient = (uid) => {
        axios.post('http://127.0.0.1:3001/patientDelete', {
            patient_cd: uid
        })
        .then(() => {
            window.location.replace('/chart');   // 새로고침
        })
        .catch(() => {
            alert("에러");
        })
    }

    // 초기화
    const reset = () => {
        getChart()
        search_setName('');
    }

    // 환자 검색
    const search_patient = () => {
        console.log(search_name);
        axios.post("http://127.0.0.1:3001/patientSearch", {
           patient_name: search_name
        })
        .then((res) => {
            console.log(res.data.name)
            if(res.data.name== search_name) {
                    
                let chart =  res.data.patient.map((patient,index) => {
                    return (
                        <tr key={index} className="map_func">
                            <td>{patient.patient_name}</td>
                            <td>{patient.patient_birthdate}</td>
                            <td>{patient.patient_gender}</td>
                            <td>{patient.patient_phone}</td>
                            <td>{patient.hospital_room}</td>
                            <td className='right_btn'>
                                {/* onClick 쓸 때 ()=>함수명 해야 눌렀을 때만 실행됨 */}
                                <button onClick={()=>det_information(patient.patient_cd)} className="det_info">상세</button>
                                <button onClick={()=>delete_patient(patient.patient_cd)} className="delete">삭제</button>
                            </td>
                        </tr>   
                    )
                })
                setChart(chart);
            }
        })
        .catch(() => {
            alert("환자 검색 에러")
        })
    }

    // 차트 불러오기
    const getChart= () =>{
        axios.get('http://127.0.0.1:3001/patientAll')
        .then((res) => {

            let chart =  res.data.patient.map((patient,index) => {
                return (
                    <tr key={index} className="map_func">
                        <td>{patient.patient_name}</td>
                        <td>{patient.patient_birthdate}</td>
                        <td>{patient.patient_gender}</td>
                        <td>{patient.patient_phone}</td>
                        <td>{patient.hospital_room}</td>
                        <td className='right_btn'>
                            {/* onClick 쓸 때 ()=>함수명 해야 눌렀을 때만 실행됨 */}
                            <button onClick={()=>det_information(patient.patient_cd)} className="det_info">상세</button>
                            <button onClick={()=>delete_patient(patient.patient_cd)} className="delete">삭제</button>
                        </td>
                    </tr>   
                )
            })
            setChart(chart);
        })
        .catch(() => {
            alert("전체환자차트 불러오기 에러")
        })
    }

    return (
        <div className='Chart_container'>
            <div className='title_div'>
                <h1>환자 차트</h1>
            </div>
            <div className='plus_search_div'>
                <div className='plus_div'>
                    <button onClick={()=> plus()} className='plus_btn'>환자 추가</button>
                    {/* <img src='../image/plus.png'></img> */}
                </div>
                <div className='search_div'>
                    {/* <img src='../image/search.png'></img> */}
                    <input type="text" onChange={(e)=>search_setName(e.target.value)}
                    value={search_name} name="name" className="search_name" placeholder="환자 이름"></input>
                    <button onClick={()=> {search_patient()}} className='search_btn'>검색</button>
                    <button onClick={()=> {reset()}} className='reset_btn'>초기화</button>
                </div>
            </div>
            <table id='patient_chart'>
                <th>성함</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>전화번호</th>
                <th>병실</th>
                <th></th>
                {Chart}
            </table>
            <div className="charfooter">
                <hr/>
                <p className="chartfooter1">
                    &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                </p>
            </div>
        </div>
    )
}


export default Chart;
