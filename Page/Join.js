import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import "../css/Join.css";

const Join = () => {

    const [id, set_id] = useState('');
    const [pw, set_pw] = useState('');
    const [checkpw, set_checkpw] = useState('');
    const [name, set_name] = useState('');
    const [gender, set_gender] = useState('');
    const [birth, set_birth] = useState('');
    const [belong, set_belong] = useState('');
    const [tel, set_tel] = useState('');
    const [mail, set_mail] = useState('');
    const [address, set_address] = useState('');

    const nav = useNavigate();
    const Swal = swal;

    const handleJoin = (event) => {

        event.preventDefault();

        let joinData = {
            id : id,
            pw : pw,
            name : name,
            gender : gender,
            birth : birth,
            belong : belong,
            tel : tel,
            mail : mail,
            address : address,
        }

        axios.post('http://127.0.0.1:3001/joinData', {
            joinData : joinData
        })
        .then(() => {
            // alert('회원가입 완료')
            Swal.fire({
                title: '회원가입 완료',
                width: 400,
                padding: '0.8em',
                color: 'black',
              })
            nav('/')
        })
        .catch(() => {
            alert('다시해주세요')
        })
    }
    
    return (
        <>
        <div>
            <section>
                <div className='join_container'> 
                    {/* 왼쪽 회원가입 */}
                    <div className='join_left'>
                        <h1>Sign up</h1>
                        <form onSubmit={handleJoin} className="form_class">
                            <div>
                                <input type="text" onChange={(e)=>set_id(e.target.value)}
                                value={id} name="id" className="id" placeholder='ID 입력'></input>
                            </div>
                            <div>
                                <input type="password" onChange={(e)=>set_pw(e.target.value)}
                                value={pw} name="pw" className="pw" placeholder="비밀번호 입력"></input>
                            </div>
                            <div>
                                <input type="password" onChange={(e)=>set_checkpw(e.target.value)}
                                value={checkpw} name="checkpw" className="checkpw" placeholder='비밀번호 확인'></input>
                            </div>

                            <div>
                                <input type="text" onChange={(e)=>set_name(e.target.value)}
                                value={name} name="name" className="name" placeholder='이름'></input>
                            </div>
                            <div>
                                <select onChange={(e)=>set_gender(e.target.value)} value={gender} name="gender" className="gender">
                                    <option value="">성별</option>
                                    <option value="Man">남자</option>
                                    <option value="Woman">여자</option>
                                </select>
                            </div>
                            <div>
                                <input type="date" onChange={(e)=>set_birth(e.target.value)}
                                value={birth} name="birth" className="birth"></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_belong(e.target.value)}
                                value={belong} name="belong" className="belong" placeholder="소속기관"></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_tel(e.target.value)}
                                value={tel} className="tel" name="tel" maxLength="11" placeholder="휴대전화"></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_mail(e.target.value)}
                                value={mail} className="mail" name="mail" placeholder='E-mail'></input>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=>set_address(e.target.value)}
                                value={address} name="address" className="address" placeholder='주소'></input>
                            </div>
                            <div className='complete_div'>
                                <input type="submit" value="확인" className="complete"></input>
                            </div>
                        </form>
                    </div>
                    {/* 오른쪽 사진 */}
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
export default Join;
