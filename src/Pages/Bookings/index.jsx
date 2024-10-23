import { useEffect, useState } from "react";
import DataTable from "../../Components/DataTable";

export default function ShowBookings() {
  const [bookings, setBookings] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/bookings/', {
      headers: {
        "token": sessionStorage.getItem("_tk")
      }
    }).then((response) => response.json()).then((result) => {
      if (result && result.data) {
        setBookings(result.data);
      }
    }).catch((error) => console.log(error))
  }, []);

  return (
    <div>
      <DataTable headers={[{label: "Booking Id", id: "_id"}, {label: "Start Time", id: "bookingStartTime"}, {label: "End Time", id: "bookingEndTime"}, {label: "Service Type", id: "business"}, {label: "Booked Date", id: "createdAt"}]} data={bookings} />
    </div>
  )
}
