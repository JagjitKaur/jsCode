import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions';
import './styles/app.scss';
ReactDOM.render(
<div className='jumbotron'>
<h1 className="text-center">Simply Javascript</h1>
   <Questions /></div>,
   document.getElementById('app')
);