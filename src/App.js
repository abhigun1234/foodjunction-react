import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import NavBar from './NavBar';
import Baner from './Baner';
import FoodGallery from './FoodGallery';
import Footer from './Footer';
import MenuTable from './MenuTable';

function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
  <Baner/>
  <FoodGallery></FoodGallery>
  <MenuTable></MenuTable>
  {/* <Baner/>
  <FoodGallery></FoodGallery>
  <MenuTable></MenuTable>
<Footer></Footer> */}
    </div>
  );
}

export default App;
