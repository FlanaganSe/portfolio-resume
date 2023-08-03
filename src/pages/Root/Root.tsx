import { Sidebar } from "../../shared/components/Sidebar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="h-screen m-0 flex">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 mt-16 md:px-[10%]">
        <Outlet />
      </div>
    </div>
  );
};
