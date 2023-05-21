import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Upcomingevents from './Components/Upcomingevents';
import Contact from './Components/Contact';
import Maps from './Components/Maps';



function App() {
  return (
    <div>
    <Navbar/>
      <Home/>

      
     <Upcomingevents/>
     <Contact/>
     <Maps/>



    </div>
  );
}

export default App;
