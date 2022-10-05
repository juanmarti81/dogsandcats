import "./App.css";
import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";
import {PageFooter} from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <Outlet />
        <PageFooter />
      </div>
    </>
  );
}

export default App;
