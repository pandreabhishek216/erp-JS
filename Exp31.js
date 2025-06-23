import React from 'react'
import cs from'../images/im1.jpg'
import '../index.css'
export default function exp31(){
  return (
    <div className='h1-container'>
        <h1 class="animate__animated animate__fadeInUpBig">Welcome to RAI TECHNOLOGY UNIVERSITY</h1>
        <h1 class="animate__animated animate__fadeInUpBig">Department of Information Technology</h1>
      <img src={cs} alt="B TECH IN INFORMATION TECHNOLOGY" style={{width: '100%', height: 'auto'}} />
      <h1 class="animate__animated animate__fadeInUpBig" style={{textAlign: 'center'}}>B TECH IN INFORMATION TECHNOLOGY</h1>
    </div>
  )
}

