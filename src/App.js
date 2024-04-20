import './App.css';
import ProductCards from './Components/Cards/Card';
import Categories from './Components/Categories/Categories';
import Nav from './Components/Navbar/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Categories/>
      <ProductCards/>
    </div>
  
  );
}

export default App;
