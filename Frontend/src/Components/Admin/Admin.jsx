import { Link, Outlet } from "react-router-dom";

export default function Admin() {
    return (
        <>
            <div className="flex flex-row bg-green-100 py-8 px-14 justify-around">

                <Link to="/AdminDashboard/Users" className="py-2 px-8 text-center rounded-lg bg-gray-300 text-black">Users</Link>
                <Link to="/AdminDashboard/Orders" className="py-2 px-8 text-center rounded-lg bg-gray-300 text-black">Orders</Link>
                <Link className="py-2 px-8 text-center rounded-lg bg-gray-300 text-black">Session Booked</Link>
                <Link className="py-2 px-8 text-center rounded-lg bg-gray-300 text-black">Ideas</Link>
                <Link className="py-2 px-8 text-center rounded-lg bg-gray-300 text-black">Debugs</Link>

            </div>

            <Outlet />

        </>
    )
}