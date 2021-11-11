import React from 'react'
import Card from './components/Card';
import More from './components/More';
import MainLayout from './components/MainLayout';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import HeroPic from './assets/HeroPic.png'
import './App.css';

function App() {
  const recommendItems = [
    { name:'محمد رضایی', time:'25 دقیقه پیش', price:'80400000'},
    { name:'ندا جوادی', time:'1 روز پیش', price:'75000000'},
    { name:'مریم محمدی', time:'1 روز پیش', price:'7400000'},
  ];
  return (
    <MainLayout className="app">
        <Hero title='آیفون 12 اپل' lastSeen='از 30 دقیقه پیش' pic={HeroPic} />
        <Statistics price={80400000} number={30} />
        <More />
        <Card name={recommendItems[0].name} time={recommendItems[0].time} price={recommendItems[0].price} />
        <Card name={recommendItems[1].name} time={recommendItems[1].time} price={recommendItems[1].price} />
        <Card name={recommendItems[2].name} time={recommendItems[2].time} price={recommendItems[2].price} />
    </MainLayout>
  );
}

export default App;
