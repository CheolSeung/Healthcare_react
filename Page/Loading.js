import '../css/Loading.css'
import React ,{useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../image/heartbeat.gif'
import {Background, LoadingText} from './Styles';
// import SpinContainer from '@semcore/ui/spin-container';
// import Loader from "react-loader-spinner";

function Loading() {

    const [data ,setData] = useState(0);
    const nav = useNavigate();

    function test(){
        nav('/test') //이동할 페이지
    }

    useEffect(()=>{
        setTimeout(()=>{setData(1)},3000);
    },[]);

    return (
        <>
        {data !== 0 ? test():''}
        <Background>
             <img src={Spinner} alt="로딩중" width={300}></img>
            <LoadingText>Data 로딩 중입니다....</LoadingText>
        </Background>
        </>
    )
}

export default Loading;
