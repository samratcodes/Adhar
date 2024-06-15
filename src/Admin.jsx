
import { Outlet } from "react-router-dom";
import AdminNavbar from "./Components/AdminNavbar";

const Admin = () => {
  return (
    <div>
      <AdminNavbar/>
      <Outlet />
    </div>
  );
};

export default Admin;
