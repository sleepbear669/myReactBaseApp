import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

//import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';
//
//const states = [{
//    name: 'home',
//    url: '/home'
//}];
//
//const plugins = [
//    pushStateLocationPlugin
//];
//
//ReactDOM.render(
//    <UIRouter plugins={plugins} states={states}>
//        <UIView/>
//    </UIRouter>,
//    document.getElementById('root')
//);