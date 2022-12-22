import './App.css';
import {Route, Routes} from "react-router-dom"
import Navbar1 from './layout/Navbar1';
// import Home from './page/Home';
import Home from './page/Home_01';
import Join from './page/Join';
import Login from './page/Login';
// import Login1 from './page/Login1';
import Chart from './page/Chart';
import TestChart from './page/TestChart';
import Test from './page/Test';
import TestResult from './page/TestResult';
import Detail from './page/detail';
import Patient_plus from './page/Patient_plus';
import MyCalendar from './page/MyCalendar';
import Add_Schedule from './page/AddSchedule';
import Management from './page/Management';
import Loading from './page/Loading';
import AdminSchedule from './page/AdminSchedule';
// import Footer from './layout/Footer';


// redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import {useEffect} from 'react'
// import axios from 'axios';


function reducer(currentState, action) {
  
  if(currentState === undefined) {
    return {
      p_cd : ''
    }
  }
  if(action.type == 'det_info') {
    currentState.p_cd = action.p_cd;
    console.log({...currentState});
  }

  if(action.type == 'detail'){
    currentState.uid = action.uid;
  }
  return {...currentState}
}
const store = createStore(reducer);


function App() {

  return (
    <>
      <Provider store={store}>
        <Navbar1></Navbar1>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/join' element={<Join></Join>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          {/* <Route path='/login' element={<Login1></Login1>}></Route> */}
          <Route path='/chart' element={<Chart></Chart>}></Route>  
          <Route path='/test' element={<Test></Test>}></Route>  
          <Route path='/testresult' element={<TestResult></TestResult>}></Route>  
          <Route path='/management' element={<Management></Management>}></Route>  
          <Route path='/loading' element={<Loading></Loading>}></Route>
          <Route path='/detail' element={<Detail></Detail>}></Route>
          <Route path='/testchart' element={<TestChart></TestChart>}></Route>
          <Route path='/calendar' element={<MyCalendar></MyCalendar>}></Route>
          <Route path='/add_schedule' element={<Add_Schedule></Add_Schedule>}></Route>
          <Route path='/admin_schedule' element={<AdminSchedule></AdminSchedule>}></Route>
          <Route path='/patient_plus' element={<Patient_plus></Patient_plus>}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </Provider>
    </>
  );
}

export default App;
