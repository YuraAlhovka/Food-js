import React from 'react';
import ReactDOM from 'react-dom/client';
import Calc from './modules/Calc';
import Cards from './modules/Cards';
import Forms from './modules/Forms';
import Modal from './modules/Modal';
import Slider from './modules/Slider';
import Tabs from './modules/Tabs';
import Timer from './modules/Timer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calc />
    <Cards />
    <Forms />
    <Modal />
    <Slider />
    <Tabs />
    <Timer />
  </React.StrictMode>
);

