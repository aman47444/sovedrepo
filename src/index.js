import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './component/Apps';
import reducers from './reducer';
// import Demo from './Demo';
// import FunctionComponent from './FunctionComponent';
// import ClassComponent from './ClassComponent';
import * as serviceWorker from './serviceWorker';
// import Student from './component/Student';
// import App from './component/App';
// import Login from './component/Login';
// import Myapp from './Myapplication';
// import Myapp from './Myapplication';
// import Updating from './Updating';
// import Clock from './Clock';
// import TimerComponent from './TimerComponent';
// import Myapp from './Myapp';
// import NavBar from './component/NavBar';
// import TimerComponent from './component/TimerComponent';
// import Demo from './Demo';
// import App from './App';
// import {BrowserRouter, Route} from 'react-router-dom';
// // import Axio from './component/Axios';
// import Form from './component/Form';
// import MenuBar from './component/MenuBar';
// import Login from './component/Login';
// import Form from './component/Form';
// import PropsEle from './Props';
// import State from './State';
// import Eventhandle from './Eventhandle'
// ReactDOM.render(<Demo />, document.getElementById('root'));
// ReactDOM.render(<FunctionComponent />, document.getElementById('root'));
//  ReactDOM.render(<ClassComponent name="Aman"/>, document.getElementById('root'));
//  ReactDOM.render(<PropsEle name="Aman" roll="127" age='24' />, document.getElementById('root'));
//  ReactDOM.render(<Updating />, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<TimerComponent />, document.getElementById('root'));
// ReactDOM.render(<Myapp />, document.getElementById('root'));
// ReactDOM.render(
//     <BrowserRouter>
//     <diV className="App">
//         <NavBar></NavBar>
//         <Route exact path="/" component={App}/>
//         <Route path="/Demo" component={Demo}/>
//         <Route path="/Timer" component={TimerComponent}/>
//         <Route path="/MenuBar" component={MenuBar}/>
//         <Route path="/Form" component={Form}/>
//     </diV>
//     </BrowserRouter>, document.getElementById('root'));
// ReactDOM.render(<Myapp/>,document.getElementById('root'));
// ReactDOM.render(<Myapp/>,document.getElementById('root'));
// ReactDOM.render(<Student />,document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('stu'));
// ReactDOM.unmountComponentAtNode(document.getElementById('stu'));
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));
const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
