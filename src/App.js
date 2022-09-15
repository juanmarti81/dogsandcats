import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div>Categories</div>
        <div>Hero</div>
        <div>Promotions</div>
    </div>
  );
}

export default App;
