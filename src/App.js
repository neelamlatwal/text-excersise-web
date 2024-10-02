
import './App.css';
import Header from "./components/Header";
// import CustomMap from './components/custom-map';
import MeetCommunity from "./pages/meet-community";
import OurMenu from "./pages/our-menu";
import Contact from "./pages/contact-us";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="wrapper-content bg-grey">
      {/* header Section */}

      <Header />

      {/* meet community */}
      <MeetCommunity />

      {/* our-menu */}
      <div className='our-menu-section padding-60'>
        <div className='container'>
          <div className="section-header">
            <h4>OUR MENU</h4>
            <button className='btn-primary know-more-btn'>KNOW MORE</button>
          </div>
          <OurMenu />
        </div>
      </div>
      {/* POPULAR RECIPES */}

      {/* contact us */}
      <Contact />
      {/* footer */}
      <Footer />



    </div>
  );
}

export default App;
