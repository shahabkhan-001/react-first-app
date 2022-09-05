import './App.css';
import React from 'react';
import Header from './components/header';
import MainBox from './components/mainbox';
import Content from './components/content';
import Footer from './components/Footer';

function App(){
  return(
    <>
  <div style={{backgroundColor : "#F0F2F5"}}>
    <div className='Bg-Pic'>
    <Header />
    </div>
    <div className='Main-Box'>
      <MainBox />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
</div>
    </>
  )
}
export default App;
