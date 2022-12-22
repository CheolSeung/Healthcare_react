import React from 'react';
import '../css/Management.css'

function Management() {
    return (
        <>
        <div className='mm_all'>
            <div className='mm_container'>
                <div className='mm_title'>
                    <h1>당뇨 관리 방법</h1>
                </div>
                <hr></hr>
                <div className='manage_img_div'>
                    <img className='manage_img' src="https://www.diabetes.or.kr/general/image/dietary/dietary01_01.png" alt="rice"></img>
                    <h4 className="image_title">일정 시간에 알맞은 음식을 규칙적으로 먹기</h4>
                    <p>적절한 열량섭취와 규칙적인 식사는 혈당조절에 도움이 됩니다.</p>
                </div>
                <hr></hr>
                <div className='manage_img_div'>
                    <img className='manage_img' src='https://www.diabetes.or.kr/general/image/dietary/dietary01_03.png' alt='cabbage'></img>
                    <h4 className="image_title">식이섬유소를 충분히 섭취</h4>
                    <p>식이섬유소는 완만한 혈당의 상승과 혈중지방의 농도를 조절하므로 <br></br>
                        혈당 조절 및 심뇌혈관계 질환의 예방에 도움이 됩니다.</p>
                </div>
                <hr></hr>
                <div className='manage_img_div'>
                    <img className='manage_img' src='https://www.diabetes.or.kr/general/image/dietary/dietary01_04.png' alt='meat'></img>
                    <h4 className="image_title">지방을 적절히 섭취하되 콜레스테롤의 섭취 제한하기</h4>
                    <p>동물성 단백질에 함유된 포화지방산과 콜레스테롤의 과다한 섭취는 심뇌혈관계질환의 위험 <br></br>
                        을 증가시킬 수 있으므로 가급적 섭취를 줄이고 식물성 기름으로 적정량 섭취합니다.</p>
                </div>
                <hr></hr>
                <div className='manage_img_div'>
                    <img className='manage_img' src='https://www.diabetes.or.kr/general/image/dietary/dietary01_02.png' alt='sugar'></img>
                    <h4 className="image_title">설탕이나 꿀 등 단순당의 섭취를 주의합니다.</h4>
                    <p>단순당은 농축된 열량원으로 소화흡수가 빨라 급격한 혈당상승을 유발할 수 있습니다.</p>    
                </div>
                <hr></hr>
                <div className='manage_img_div'>
                    <img className='manage_img' src='https://www.diabetes.or.kr/general/image/dietary/dietary01_05.png' alt='salt'></img>
                    <h4 className="image_title">염분 섭취를 줄입니다.</h4>
                    <p>과다한 소금섭취는 혈압을 상승시킬 수 있으므로 싱겁게 먹는 습관을 갖도록 합니다.</p>
                </div>
                <hr></hr>
                <div className='manage_img_div'>
                    <img className='manage_img' src='https://www.diabetes.or.kr/general/image/dietary/dietary01_06.png' alt='beer'></img>
                    <h4 className="image_title">음주는 피하는 것이 좋습니다.</h4>
                    <p>술은 영양소가 포함되지 않으면서 열량을 많이 내므로 피하는 것이 좋습니다.</p>
                </div>
            </div>

            {/* 하단 */}
            <div className="manage_charfooter">
                <hr className='mmfooter_hr'/>
                <p className="manage_chartfooter1">
                    &copy;{new Date().getFullYear()} Gwangju Ai School | All right reserved | Healthcare Service | tktk.gjai&sci
                </p>
            </div>
        </div>
        </>
    )
}

export default Management;
