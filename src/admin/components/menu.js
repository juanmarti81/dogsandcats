import {Sidebar} from "flowbite-react";
import {
  ChartPieIcon,
  ShoppingBagIcon,
  InboxIcon,
  UserIcon,
  ArrowSmallRightIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="w-fit bg-gray-50">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={ChartPieIcon}>
                <Link to="/admin">Dashboard</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={InboxIcon}>
                <Link to="/admin/categories">Categories</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={UserIcon}>
                <Link to="/admin/products">Products</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={ShoppingBagIcon}>
                <Link to="/admin/products">Promotions</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={ArrowSmallRightIcon}>
                <Link to="/admin/products">Shipments</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={UserPlusIcon}>
                <Link to="/admin/products">Users</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}

export default Menu;
