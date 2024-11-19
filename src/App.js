
import './App.css';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
       <Navbar/> 
      <SignUp/>
      <ParkingSpace/>
      <Footer/>
    </div>
  );
}

export default App;