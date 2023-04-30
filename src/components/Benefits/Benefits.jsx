import React from 'react';
import './Benefits.scss';
import smile1 from '../../images/smile1.png';
import smile2 from '../../images/smile2.png';
import smile3 from '../../images/smile3.png';
import smile4 from '../../images/smile4.png';

export const Benefits = () => {
  return (
    <div className='benefits'>
      <div className='benefits__sphere benefits__sphere_violet'></div>
      <div className='benefits__sphere benefits__sphere_blue'></div>
      <div className='benefits__sphere benefits__sphere_blur'></div>
      <h2 className='benefits__title'>Что даст тебе обучение?</h2>
      <ul className='benefits__list'>
        <li className="benefits__item">
          <img className='benefits__image' src={smile1} alt='смайл' />
          <p className='benefits__description'>
            Откроешь свой первый<br/> криптокошелек и научишься<br/> с ним работать
          </p>
        </li>
        <li className="benefits__item">
          <img className='benefits__image' src={smile2} alt='смайл' />
          <p className='benefits__description'>
            Поймёшь, как выбирать<br/> правильные дропы
          </p>
        </li>
        <li className="benefits__item">
          <img className='benefits__image' src={smile3} alt='смайл' />
          <p className='benefits__description'>
            Построишь план<br/> по быстрому приумножению<br/> заработанных средств
          </p>
        </li>
        <li className="benefits__item">
          <img className='benefits__image' src={smile4} alt='смайл' />
          <p className='benefits__description'>
            Узнаешь кто такие<br/> холдеры и флипперы
          </p>
        </li>
      </ul>
    </div>
  )
}
