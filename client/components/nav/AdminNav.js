import { useState, useEffect } from "react";
import Link from "next/link";

const AdminNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/admin">
        <a className={`nav-link ${current === "/admin" && "active"}`} style={{color:'black'}}>
          Dashboard
        </a>
      </Link>
      <Link href="/admin/category">
        <a className={`nav-link ${current === "/admin/category" && "active"}`} style={{color:'black'}}>
          Categories
        </a>
      </Link>
    </div>
  );
};

export default AdminNav;
