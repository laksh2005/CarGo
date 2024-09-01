import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import Features from './Features';
import Process from './Process';
import Areas from './Areas';
import Faqs from './Faqs';

const Landing = () => {
  return (
    <div>
      <Header/>
      <MainContainer/>
      <Features />
      <Process />
      <Areas />
      <Faqs />
    </div>
  )
}

export default Landing;