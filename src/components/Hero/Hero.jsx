import React, { useState } from 'react';
import { Popup } from '../../UI/Popup';
import './Hero.scss';

export const Hero = () => {

  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = () => {
    setPopupOpened(!popupOpened)
  }

  return (
    <div className='hero'>
      <div className={!popupOpened ? 'hero__cover' :'hero__cover hero__cover_opened'}>
        <Popup setPopupOpened={setPopupOpened} />
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
