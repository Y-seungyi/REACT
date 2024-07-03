import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './LoginPage.css'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

 
  const clickTest = () => {
  }


  return (
    <>
      <h1>로그인</h1>
      <div className='registerBox'>
        <input type='email'  value={email} 
        placeholder='이메일(아이디)' onChange={(e) => setEmail(e.target.value)}/>
        <input type='password'value={password} placeholder='비밀번호'onChange={(e) => setPassword(e.target.value)}/>
        <button className="loginbtn"onClick={clickTest}>로그인</button>
        <div>
            <Link to="/Register">
                <button className="registerbtn1"onClick={clickTest}>회원가입</button>
            </Link>
        <button className="registerbtn2"onClick={clickTest}>카카오 회원가입</button>
        </div>
      </div>
    </>
  )
}

export default LoginPage
