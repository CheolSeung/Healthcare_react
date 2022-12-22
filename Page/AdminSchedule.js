import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../css/AdminSchedule.css';

function AdminSchedule() {

    const nav = useNavigate();

    const memo_delete = () => {
        alert("삭제 완료");
        nav('/admin_schedule');
    }

    return (
        <>
        <div className='admin_all'>
          <div className='admin_container'>
            {/* 왼쪽 */}
            <div className='admin_left'>
              <div className='admin_alram'>
                <h1>"전체 일정"</h1>
                <input type="checkbox"></input>12월 01일 ~ 31일 만 62세 이상 무료 독감 접종<br></br>
                <input type="checkbox"></input>12월 05일 이사회<br></br>
                <input type="checkbox"></input>12월 08일 협력기관(광인사) 방문<br></br>
                <input type="checkbox"></input>12월 12일 14시 간호사, 전산직, 조리사 신입, 경력 직원 채용 면접<br></br>
                <input type="checkbox"></input>12월 23일 간호부장(김새봄) 정년퇴임식<br></br>
                <input type="checkbox"></input>12월 28일 두근두근대학교 간호실습생 면담 및 교육<br></br>
                <input type="checkbox"></input>12월 30일 송년회<br></br>
                <button onClick={memo_delete} className="alram_btn">일정 삭제</button><br></br>
              </div>
            </div>
            {/* 오른쪽 */}
            <div className='admin_right'>
              <div className="admin_MyCalendar">
                <img src='../image/calendar.jpg' alt='달력사진'></img>
              </div>
            </div>
          </div>
          
          {/* footer */}
          <div className="admin_charfooter">
            <hr/>
            <p className="admin_chartfooter1">
                &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
            </p>
          </div>
        </div>
        </>
    )
}

export default AdminSchedule;
