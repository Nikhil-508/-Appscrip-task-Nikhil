import './App.css';
import ProductCards from './Components/Cards/Card';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Navbar/Nav';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Nav/>
      <Categories/>
      <Sidebar/>
      <ProductCards/>
      <Footer/>
    </div>
  
  );
}

export default App;
