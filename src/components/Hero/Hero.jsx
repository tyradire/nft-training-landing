import React, { useState } from 'react';
import './Hero.scss';

export const Hero = () => {

  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  return (
    <div className='hero'>
      <div className={!popupOpened ? 'hero__cover' :'hero__cover hero__cover_opened'}>
        <div className='hero__popup'>
          <button className='popup__close-btn' onClick={openPopup}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1436 11.5L22.2061 3.45623C22.5592 3.10316 22.7576 2.6243 22.7576 2.12498C22.7576 1.62567 22.5592 1.1468 22.2061 0.793732C21.8531 0.440662 21.3742 0.24231 20.8749 0.24231C20.3756 0.24231 19.8967 0.440662 19.5436 0.793732L11.4999 8.85623L3.45614 0.793732C3.10307 0.440662 2.6242 0.24231 2.12489 0.24231C1.62557 0.24231 1.1467 0.440662 0.793635 0.793732C0.440566 1.1468 0.242214 1.62567 0.242214 2.12498C0.242214 2.6243 0.440566 3.10316 0.793635 3.45623L8.85614 11.5L0.793635 19.5437C0.617895 19.718 0.478406 19.9254 0.383215 20.1539C0.288023 20.3824 0.239014 20.6275 0.239014 20.875C0.239014 21.1225 0.288023 21.3676 0.383215 21.5961C0.478406 21.8245 0.617895 22.0319 0.793635 22.2062C0.967941 22.382 1.17532 22.5215 1.4038 22.6167C1.63229 22.7118 1.87736 22.7609 2.12489 22.7609C2.37241 22.7609 2.61748 22.7118 2.84597 22.6167C3.07445 22.5215 3.28183 22.382 3.45614 22.2062L11.4999 14.1437L19.5436 22.2062C19.7179 22.382 19.9253 22.5215 20.1538 22.6167C20.3823 22.7118 20.6274 22.7609 20.8749 22.7609C21.1224 22.7609 21.3675 22.7118 21.596 22.6167C21.8245 22.5215 22.0318 22.382 22.2061 22.2062C22.3819 22.0319 22.5214 21.8245 22.6166 21.5961C22.7117 21.3676 22.7608 21.1225 22.7608 20.875C22.7608 20.6275 22.7117 20.3824 22.6166 20.1539C22.5214 19.9254 22.3819 19.718 22.2061 19.5437L14.1436 11.5Z" fill="white"/>
            </svg>
          </button>
          <h2 className='popup__title'>
            Начни прямо сейчас!
          </h2>
          <p className='popup__description'>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </p>
          <form className='popup__form'>
            <input className='popup__input' type='email' minLength='8' placeholder='Ваш email'/>
            <button className='popup__submit-btn'>
              Оплатить
            </button>
          </form>
        </div>
      </div>
      <h1 className='hero__title'>Не упусти возможность войти в <span className='hero__title hero__title_bold'>прибыльную нишу</span></h1>
      <div className='hero__grid-bottom'>
        <p className='hero__description'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
        <button className='hero__button' onClick={openPopup}>Начать зарабатывать на NFT</button>
      </div>
      <div className='hero__image'></div>
    </div>
  )
}
