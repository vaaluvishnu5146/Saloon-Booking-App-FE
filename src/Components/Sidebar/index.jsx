import { useRef } from "react";
import Icons from "../../Assets/icons";
import NavItemExpandable from "../NavItem/NavItemExpandable";
import { useAuthContext } from '../../Context/AuthContext';
import { useBrandContext } from "../../Context/BrandContext";

const USERS = [{
  label: "Create User",
  to: "/dashboard/users/create",
  id: "createUser",
},
{
  label: "Manage User",
  to: "/dashboard/users/manage",
  id: "manageUser",
},
];

const BOOKINGS = [{
    label: "Create Booking",
    to: "/dashboard/bookings/create",
    id: "createBooking",
  },
  {
    label: "Manage Bookings",
    to: "/dashboard/bookings/manage",
    id: "manageBookings",
  },
];

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const {currentUser = {}, decodedToken = {}} = useAuthContext();
  const { brand = {} } = useBrandContext();
  function handleSidebarToggle() {
    if (sidebarRef.current.classList.contains("toggled")) {
      sidebarRef.current.classList.remove("toggled");
    } else {
      sidebarRef.current.classList.add("toggled");
    }
  }

  return (
    <ul
      ref={sidebarRef}
      className="navbar-nav bg-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon">
          <img src="https://iconape.com/wp-content/files/uz/150633/png/150633.png" width={100} />
        </div>
        <div className="sidebar-brand-text mx-3"></div>
      </div>

      <hr className="sidebar-divider" />

      {decodedToken?.role !== "customer" ? <div>
          <NavItemExpandable
            id="users"
            label="Users"
            routes={USERS}
          />
          <NavItemExpandable
            id="bookings"
            label="Bookings"
            routes={BOOKINGS}
            />
      </div> : null }


      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={handleSidebarToggle}
        >
          <Icons.arrowRight color="#FFFFFF" />
        </button>
      </div>
    </ul>
  );
}
