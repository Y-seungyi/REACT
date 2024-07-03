import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './RegisterPage.css'
import { Link } from 'react-router-dom'


function RegisterPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [nickname,setNickname] = useState("")
  const [emailcheck,setEmailcheck] = useState(false)
  const [certify,setSertify] = useState(false)
  const [certifycode,setSertifycode] = useState()
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  const checkEmail = () =>
    {
      if(emailRegEx.test(email))
        {
          setEmailcheck(true)
        }
        else
      {
        setEmailcheck(false)
      }
    }
    
  const clickTest = () => {
  }

  const sendCode = () =>
    {
      if(emailcheck)
        {
          setSertify(true)
        }
    }

  return (
    <>
      <div className='backbtncontainer'>
      <Link to="/Login">
      <button className='backbtn'>뒤로가기</button>
      </Link>
      </div>
      <h1>회원가입</h1>
      <div className='registerBox'>
        <input type='email'  value={email} 
        placeholder='이메일(아이디)' onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail}
        className={emailcheck?'trueEmail':'falseEmail'}/>
        <button className='emailbtn' onClick={sendCode}>이메일 인증</button>
        <div>
          {certify?
          <input value={certifycode} placeholder='인증코드 입력' 
          onChange={(e) => setSertifycode(e.target.value)}/>
          :''}
        </div>
        <div className='emailbtn'>
          {certify?
          <button className='emailbtn'>코드 인증</button>
          :''}
        </div>
        <input type='password'value={password} placeholder='비밀번호'onChange={(e) => setPassword(e.target.value)}/>
        <input value={nickname} placeholder='닉네임'onChange={(e) => setNickname(e.target.value)}/>
        <button className="registerbtn"onClick={clickTest}>회원가입</button>
      </div>
    </>
  )
}

export default RegisterPage
