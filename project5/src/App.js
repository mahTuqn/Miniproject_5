import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import LayoutDefault from './layout/LayoutDefault';
import Quiz from './pages/Quiz/Quiz';
import Register from './pages/Register/Register';
import Result from './pages/Result/Result';
import Topic from './pages/Topic/Topic';
import Answers from './pages/Answers/Answers';
import Logout from './pages/Logout/Logout';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='quiz/:id' element={<Quiz/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='result/:id' element={<Result/>}/>
          <Route path='topic' element={<Topic/>}/>
          <Route path='answers' element={<Answers/>}/>
          <Route path='logout' element={<Logout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
