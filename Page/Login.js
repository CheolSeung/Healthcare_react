import React from "react";
import { useState } from "react";
import "../css/Login.css";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert2';


function Login() {
    const [id, set_id] = useState('');
    const [pw, set_pw] = useState('');

    const nav = useNavigate();
    const dispatch = useDispatch();
    const Swal = swal;

    const handleLogin = (event) => {

        event.preventDefault();

        let loginData = {
            id: id,
            pw: pw
        }

        axios.post('http://127.0.0.1:3001/loginData', { 
            loginData : loginData 
        })
        .then((res) => {
            console.log('login 성공 시 넘어오는 데이터',res)
            if(res.data.result == "login success") {
                console.log("성공", res.data)

                //로컬 저장소에 데이터 저장
                localStorage.setItem("user", res.data.user.mb_id);

                // alert("로그인 성공")
                Swal.fire({
                    title: '로그인 성공',
                    width: 400,
                    padding: '0.8em',
                    color: 'black',
                  })
                dispatch({type: 'login', id : res.data.user.id})
                nav("/");
            } else {
                console.log("실패", res.data.result)
                // alert("로그인 실패")
                Swal.fire({
                    title: '로그인 실패',
                    width: 400,
                    padding: '0.8em',
                    color: 'black',
                  })
            }
        })
        .catch(() => {
            console.log("에러")
        })
    }

    return (
        <>
        <div>
            <section>
                <div className="login_container">
                    {/* 왼쪽 로그인 */}
                    <div className="login_left">
                        <h1>Login</h1>
                        <p className="title_p">We provide a smart healthcare diagnosis system.</p>
                        <form onSubmit={handleLogin} className="login_form">
                            <div>
                                <input type="text" name="id" size="20" onChange={(e) => set_id(e.target.value)} 
                                value={id} className="ID" placeholder="아이디를 입력해주세요."/>
                            </div>
                            <div>
                                <input type="password" name="pw" size="20" onChange={(e) => set_pw(e.target.value)} 
                                value={pw} className="password" placeholder="비밀번호를 입력해주세요."/>
                            </div>
                            <div>
                                <input type="submit" value="로그인" className="login"/>
                            </div>
                            <div>
                                <p>아이디가 없는 경우에는</p>
                                <p>아래의 회원가입에 들어가</p>
                                <p>가입 후 로그인 하세요.</p>
                            </div>
                            <div>
                                <Link to="/join"><input type="button" value="회원가입" className="signup"/></Link>
                            </div>
                        </form>
                    </div>
                    {/* 오른쪽 사진 */}
                    <div className="login_right">
                        <img src='../image/login.jpg'></img>
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

export default Login;
