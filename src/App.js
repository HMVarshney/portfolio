import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecentWork from "./components/RecentWork";
import Skills from "./components/Skills";

const App = () => {
  return (  
    <div>
      <Header />
      <Banner />
      <About />
      <Skills />
      <RecentWork />
      <Footer />
    </div>
  );
}
 
export default App;