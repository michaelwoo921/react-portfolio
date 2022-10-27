import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img className="profile-pic" src="/jungwoo.jpg" alt="my profile"/>
      <div className="profile-content">
      <h1> Jung Woo</h1>
      <div className="profile-position"> Full Stack Software Developer</div>
    </div>
   </div>
  )
}

export default Header