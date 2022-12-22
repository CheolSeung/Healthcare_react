import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom';
// import { useSelector} from 'react-redux';
import Sidebar from "./Sidebar";
import "../css/Navbar1.css";
import { IconContext } from 'react-icons';
import swal from 'sweetalert2';

function Navbar1 () {

    const [sidebar, setSIdebar] = useState(false);
    const showSidebar = () => setSIdebar(!sidebar);
    
    const nav = useNavigate();
    const Swal = swal;

    const handleLogout = (type)=>{
        if(type =='logout'){
            localStorage.removeItem("user");
            Swal.fire({
                title: '로그아웃',
                width: 400,
                padding: '0.8em',
                color: 'black',
              })
            // alert("로그아웃 되었습니다.")
            nav('/')
        }
    }

    return (
        <>
            {/* 아이콘의 컬러를 화이트로 다 맞추기 */}
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" style={{position: "relative", left:"2vw"}} className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <Link to="/" className="menu_logo">
                    <img src="./image/logo.png"></img>
                </Link>
            </div>
            {/* 사이드바 닫았다 열었다 할 수 있게 하는 코드 */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {Sidebar.map((item, index) => {
                        let path = '';
                        let title = '';
                        let click = '';
               
                        if(item.title == 'Login'){ 
                            if(localStorage.length == 0){ //로그인
                                path = item.path;
                                title = item.title;
                            }else{ //로그아웃
                                path = item.path2;
                                title = item.title2;
                                click='logout';
                            }
                        }else{
                            path = item.path;
                            title = item.title;
                        }
                        return (
                            <li key={index} className={item.cName}>
                                <Link onClick={()=>handleLogout(click)} to={path}  >
                                    {item.icon}
                                    <span>{title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar1;
