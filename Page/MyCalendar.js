import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../css/MyCalendar.css';
const MyCalendar = () => {

  const nav = useNavigate();
  useEffect(()=>{
    if(localStorage.length == 0) {
      nav("/login")
    }
  },[]);

  return (
    <div>
      <div className='calendar_container'>
        <div className='calendar_left'>
          <div className='button_place'>
            <Link to="/add_schedule">
              <button className='schedule_management' type='button'>일정추가</button>
            </Link>
            <Link to="/admin_schedule">
              <button className='schedule_management' type='button'>일정관리</button>
            </Link>
          </div>
          <div className='alram'>
            <h1>"알림"</h1>
            <p>- 12월 01일 ~ 31일 만 62세 이상 무료 독감 접종</p><br></br>
            {/* <p>- 12월 05일 이사회</p><br></br> */}
            {/* <p>- 12월 08일 협력기관(광인사) 방문</p><br></br> */}
            <p>- 12월 12일 14시 간호사, 전산직, 조리사 신입, 경력 직원 채용 면접</p><br></br>
            <p>- 12월 23일 간호부장(김새봄) 정년퇴임식</p><br></br>
            <p>- 12월 28일 두근두근대학교 간호실습생 면담 및 교육</p><br></br>
            <p>- 12월 30일 송년회</p><br></br>
          </div>
        </div>
        <div className='calendar_right'>
          <div className="MyCalendar">
            <FullCalendar 
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin ]}
                events={[
                    // { title: '이사회', date: '2022-12-05' },
                    // { title: '협력기관(광인사) 방문', date: '2022-12-08' },
                    { title: '14시 직원 채용 면접', date: '2022-12-12' },
                    { title: '간호부장 정년퇴임식', date: '2022-12-23' },
                    { title: '간호실습', date: '2022-12-28'},
                    { title: '송년회', date: '2022-12-30'}
                ]}
            />
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

export default MyCalendar
