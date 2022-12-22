import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";


function Sidebar (){

    return(
        <div>
            
        </div>
    )

}
/* 사이드바에 아이콘 집어넣기 */
// 집어넣는 방법 : npm install react-icon 설치
// react-icon 구글검색 : 사용하고 싶은 아이콘 이름 찾아서 모듈 import해주기
// 사용할 아이콘의 title과 이동할 경로, icon이름, cName을 지정해주면 된다.

export default Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Reports',
    //     path: '/',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Sign Up',
        path: '/join',
        icon: <IoIcons.IoIosContacts />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text',
        title2:'Logout',
        path2:'/'
    },
    {
        title: 'Test',
        path: '/testchart',
        icon: <TbIcons.TbReportSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Patient',
        path: '/chart',
        icon: <IoIcons.IoIosToday />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <AiIcons.AiOutlineCalendar />,
        cName: 'nav-text'
    }
]
