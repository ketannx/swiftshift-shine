import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null); // dropdown disable while updating
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const res = await axios.get("/admin/book");
      setBookings(res.data.bookings);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // 🔄 Change booking status
  const changeStatus = async (bookingId, status) => {
    setUpdatingId(bookingId);
    try {
      const res = await axios.patch(`/admin/booking/${bookingId}/status`, { status });
      setBookings((prev) =>
        prev.map((b) => (b._id === bookingId ? res.data.booking : b))
      );
      alert("Status updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div>
          <h1 className="text-2xl font-bold text-green-700">Admin Dashboard</h1>
          <p className="text-gray-500">Manage all customer bookings</p>
        </div>

        <button
          onClick={logout}
          className="self-start md:self-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Bookings Table */}
      <div className="bg-white border border-green-100 rounded-xl shadow-sm overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center text-gray-500">Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No bookings found</div>
        ) : (
          <table className="w-full text-sm min-w-[900px]">
            <thead className="bg-green-50 text-green-700">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Service</th>
                <th className="px-4 py-3 text-left">Duration</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Message</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-t hover:bg-green-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-800">{booking.fullName}</td>
                  <td className="px-4 py-3 text-gray-600">{booking.service}</td>
                  <td className="px-4 py-3 text-gray-600">{booking.duration}</td>
                  <td className="px-4 py-3 text-gray-600">{booking.phone || "-"}</td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <select
                      value={booking.status}
                      disabled={updatingId === booking._id}
                      onChange={(e) => changeStatus(booking._id, e.target.value)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border
                        ${
                          booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                            : booking.status === "approved"
                            ? "bg-blue-100 text-blue-700 border-blue-300"
                            : booking.status === "rejected"
                            ? "bg-red-100 text-red-700 border-red-300"
                            : "bg-green-100 text-green-700 border-green-300"
                        }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>

                  <td className="px-4 py-3 text-gray-500">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{booking.message || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
