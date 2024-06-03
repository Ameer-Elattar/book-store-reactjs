import { Outlet } from "react-router-dom";
import { CustomNav } from "../components/CustomNav";


export function MainLayout() {
  return (
    <>
      <CustomNav />
      <Outlet/>
    </>
  );
}
