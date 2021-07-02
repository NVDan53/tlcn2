import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Context } from "../../context";

const UserNav = () => {
  // state
  const {
    state: { user },
  } = useContext(Context);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/user">
        <a className={`nav-link ${current === "/user" && "active"}`}>
          Dashboard
        </a>
      </Link>

      {/* <Link href="/user/courses">
        <a className={`nav-link ${current === "/user/courses" && "active"}`}>
          Your Courses
        </a>
      </Link> */}
    </div>
  );
};

export default UserNav;
