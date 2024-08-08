import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import Features from './Features';
import Process from './Process';
import Areas from './Areas';

const Landing = () => {
  return (
    <div>
      <Header/>
      <MainContainer/>
      <Features />
      <Process />
      <Areas />
    </div>
  )
}

export default Landing;