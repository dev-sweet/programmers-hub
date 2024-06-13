import { Outlet } from "react-router-dom";
import MainNav from "../components/Shared/MainNav";

const MainLayout = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
