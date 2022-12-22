import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Patient_plus.css'

const Patient_plus = () => {

    const [p_name, set_pname] = useState('');
    const [p_birth, set_pbirth] = useState('');
    const [p_gender, set_pgender] = useState('');
    const [p_tel, set_ptel] = useState('');
    const [p_addr, set_paddr] = useState('');
    const [h_room, set_hroom] = useState('');

    const nav = useNavigate();
    
    const handlePatient = (event) => {
        
        event.preventDefault();

        let patientData = {
            p_name : p_name,
            p_birth : p_birth,
            p_gender : p_gender,
            p_tel : p_tel,
            p_addr : p_addr,
            h_room : h_room
        }

        axios.post('http://127.0.0.1:3001/patientData', {
            patientData : patientData
        })
        .then((res) => {
            if(res.data.result == 'success')
            // localStorage.setItem("puser", puser);
            alert('추가완료')
            nav('/chart')
        })
        .catch(() => {
            alert('추가실패')
        })
    }

    return (
        <>
        <div>
            <section>
                <div className='join_container'> 
                    {/* 왼쪽 */}
                    <div className='join_left'>
                        <h1>Add Patient</h1>
                        <form onSubmit={handlePatient} className="form_class">
                            <div>
                                <input type="text" onChange={(e)=>set_pname(e.target.value)}
                                value={p_name} name="pp_name" className="pp_name" placeholder='환자 이름'></input>
                            </div>
                            <div>
                                <input type="date" onChange={(e)=>set_pbirth(e.target.value)}
                                value={p_birth} name="pp_birth" className="pp_birth"></input>
                            </div>
                            <div>
                                <select onChange={(e)=>set_pgender(e.target.value)} value={p_gender} name="gender" className="gender">
                                    <option value="">성별</option>
                                    <option value="남자">남자</option>
                                    <option value="여자">여자</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_ptel(e.target.value)}
                                value={p_tel} className="pp_tel" name="pp_tel" maxLength="20" placeholder="환자 전화번호"></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_paddr(e.target.value)}
                                value={p_addr} name="pp_addr" className="pp_addr" placeholder='환자 주소'></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_hroom(e.target.value)}
                                value={h_room} name="hroom" className='hroom' placeholder='환자병실'></input>
                            </div>
                            <div className='pp_complete_div'>
                                <input type="submit" value="환자 추가" className="pp_complete"></input>
                            </div>
                        </form>
                    </div>
                    {/* 오른쪽 */}
                    <div className='join_right'>
                        <img src='../image/signup.jpg'></img>
                    </div>
                </div>
                {/* 하단 */}
                <div className="join_charfooter">
                    <hr/>
                    <p className="join_chartfooter1">
                        &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                    </p>
                </div>
            </section>
         </div>
        </>
    )
}

export default Patient_plus;
