import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import TopNav from "../components/Shared/DashboardNav";

const DashboardLaout = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-64">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLaout;
