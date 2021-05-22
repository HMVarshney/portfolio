import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecentWork from "./components/RecentWork";
import Skills from "./components/Skills";
import './App.css';

const App = () => {
  return (  
    <>
    <Header />
    <div className='outer-wrapper'>
      <div className='wrapper'>
        <div className='slide'>
          <Banner />
        </div>
        <div className='slide'>
          <About />
        </div>
        <div className='slide'>
          <Skills />
        </div>
        <div className='slide'>
          <RecentWork />
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
}
 
export default App;