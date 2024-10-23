import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {useAuthContext} from "./Context/AuthContext";
import Insights from "./Pages/Insights";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import CreateBooking from "./Pages/Bookings/createBooking";
import ShowBookings from "./Pages/Bookings";
import CreateUser from "./Pages/Users/CreateUser";
import ShowUsers from "./Pages/Users";

function App() {
    const {isLoggedIn} = useAuthContext();
    return (
        <div>
            <ToastContainer/>
            <Routes>
                {!isLoggedIn && <Route Component={Login} path="/"/>}
                {isLoggedIn && (
                    <Route Component={Landing} path="/dashboard">
                        <Route Component={Insights} index/>
                        <Route path={'/dashboard/bookings/create'} Component={CreateBooking} />
                        <Route path={'/dashboard/bookings/manage'} Component={ShowBookings} />
                        <Route path={'/dashboard/users/create'} Component={CreateUser} />
                        <Route path={'/dashboard/users/manage'} Component={ShowUsers} />
                    </Route>
                )}
                <Route Component={NotFound} path="*"/>
            </Routes>
        </div>
    );
}

export default App;
