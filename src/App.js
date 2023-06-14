import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import GroupPhoto from './Components/GroupPhoto';
import FourSection from './Components/FourSection';
//import ImageList9 from './Components/ImageList9';
import Photo9 from './Components/Photo9';
import imageCompany from './Components/CompanyImage';
import CompanyImage from './Components/CompanyImage';
import FeedbackSection from './Components/FeedbackSection';
import ContactSection from './Components/ContactSection';
import TeamSection from './Components/TeamSection';
import LocationMap from './Components/LocationMap';
import BottomPage from './Components/BottomPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <GroupPhoto/>
      <FourSection/>
      <Photo9/>
      <CompanyImage/>
      <FeedbackSection/>
      <ContactSection/>
      <TeamSection/>
      <LocationMap/>
      <BottomPage/>

      
     
    </div>
  );
}

export default App;
