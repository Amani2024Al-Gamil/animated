import Home from './Home';
import './App.css';
import { Router,Routes,Route,Link } from 'react-router-dom';
import AOSComponent from './AOSComponent';
import AOSCC3 from './AOSCC3';
import HomeHeader from './HomeHeader';
import Number from './Number';
import TypingAnimation from './TypingAnimation';
function App() {
  return (
   <div>
    <HomeHeader />
    <Home />
   <AOSComponent />
   <AOSCC3 />
   <Number/>
   <TypingAnimation />
   </div>
  );
}

export default App;
