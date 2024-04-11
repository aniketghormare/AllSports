import logo from './logo.svg';
import './App.css';
import Topbox from './components/Topbox';
import SmallCards from './components/SmallCards';
import MadelTally from './components/MadelTally';
import Schedule from './components/Schedule';
import Mascot from './components/Mascot';
import Conversation from './components/Conversation';
import Sports from './components/Sports';
import Followus from './components/Followus';
import Compatitionzone from './components/Compatitionzone';
import PhotoGallery from './components/PhotoGallery';
import Sponcers from './components/Sponcers';
import Numbers from './components/Numbers';
import Footer from './components/Footer';


function App() {
  return (
    <div id="container">
      <div className='main'>
        <Topbox />
         {/* <SmallCards/> */}
         <MadelTally />
         <Schedule />
         <Mascot />
         <Conversation />
         <Sports />
         <Followus />
         <Compatitionzone />
         <PhotoGallery />
         <Sponcers />
         <Numbers /> 
         <Footer/>
      </div>

    </div>
   
  );
}

export default App;
