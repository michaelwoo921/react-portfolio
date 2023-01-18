import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={require('../img/jungwoo.jpg')} alt="my profile"/>
      <div className="header__content">
        <h1 className="header__name"> Jung Woo</h1>
        <div className="header__position"> Full Stack Software Developer</div>
     </div>
   </div>
  )
}

export default Header