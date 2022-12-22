import React from "react"
import '../css/AddSchedule.css';
import {useNavigate} from 'react-router-dom';


function Add_Schedule () {

    const nav = useNavigate();

    const goCalendar = () => {
        nav('/Calendar')
    }

    return(
        <>
        <div>
            <section>
                <div className='join_container'> 
                    {/* 왼쪽 */}
                    <div className='join_left'>
                        <h1>일정 추가</h1>
                        <form onSubmit={goCalendar} className="form_class">
                            <div>
                                <input type="text" name="note_title" className="note_title" placeholder="일정 제목"></input>
                            </div>
                            <div>
                                <p>시작 날짜</p>
                            </div>
                            <div>                                
                                <input type="date" name="start_day" className="start_day"></input>
                            </div>
                            <div>
                                <p>종료 날짜</p>
                            </div>
                            <div>
                                <input type="date" name="end_day" className="end_day"></input>
                            </div>
                            <div className='memo_complete'>
                                <input type="submit" value="설정 완료" className="memo_complete_btn"></input>
                            </div>
                        </form>
                    </div>
                    {/* 오른쪽 */}
                    <div className='join_right'>
                        <textarea type="text" name="note"className="note" placeholder="일정 내용" ></textarea>
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
export default Add_Schedule;
