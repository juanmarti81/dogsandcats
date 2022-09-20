import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer'
import CategoriesNavbar from "./components/CategoriesNavbar";
import Carrousel from "./components/Carrousel";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
        <div className="w-full place-content-center flex pt-10 pb-10">
            <ItemListContainer />
        </div>
        <Carrousel />
    </div>
  );
}

export default App;
