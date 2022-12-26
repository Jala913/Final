import React from 'react'
import Bground from '../assets/images/our-team/team-heading-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const OurTeamHeading = () => {
  return (
   <div className='page__about-us'>
   <div style={{ 
       backgroundImage: `url(${Bground})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       padding: '100px 0px 0px 0px'
     }} className='about-us__heading'>
     <div className='about-us__container _container'>
       <div className='row'>
         <div className='col-md-12'>
           <h1 className='about-us__title'>Müəllimlərimiz</h1>
           <span className='about-us__text'>Müəllimlərimizi görmək üçün səhifmizə nəzər yetirə bilərsiniz.</span>
             <ul className='about-us__col'>
               <li className='about-us__item'><a className='about-us__link _orange' href='#'>Ev</a></li>
               <li className='about-us__item'><FontAwesomeIcon className='about-us__icon' icon={faAngleRight} size="xs"/></li>
               <li className='about-us__item'><a className='about-us__link' href='#'>Səhifələr</a></li>
               <li className='about-us__item'><FontAwesomeIcon className='about-us__icon' icon={faAngleRight} size="xs"/></li>
               <li className='about-us__item'><a className='about-us__link' href='#'>Komandamız</a></li>
             </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default OurTeamHeading