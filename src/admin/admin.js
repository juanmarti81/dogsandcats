import {Outlet} from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/menu";

function Admin() {
  return (
    <>
      <div className="border-b border-gray-100">
        <Header />
      </div>
      <div className="flex flex-row">
        <div className="border-r border-gray-100">
          <Menu />
        </div>
        <div className="flex w-full p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
