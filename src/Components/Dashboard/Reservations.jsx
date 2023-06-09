import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditBooking from "./EditBooking";
import { removeBooking } from "../../redux/features/tickets/TicketSlice";
import { useDispatch } from "react-redux";

const Reservations = () => {
  const { bookings } = useSelector((state) => state.ticket);
  const { ticketDetails } = useSelector((state) => state.ticket);

  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const dispatch = useDispatch();
  const [available, setAvailable] = useState();

  useEffect(() => {
    let availableTicket = ticketDetails.filter(
      (item) => item.isBooked === false
    ).length;
    setAvailable(availableTicket);
  }, [ticketDetails]);

  const handleClose = () => {
    setOpen(false);
    setUpdateData(null);
  };

  const updateHandler = (details) => {
    setOpen(true);
    setUpdateData(details);
  };

  const removeHandler = (details) => {
    dispatch(removeBooking(details));
  };

  return (
    <div>
      {open && (
        <EditBooking
          setOpen={setOpen}
          updateData={updateData}
          handleClose={handleClose}
        />
      )}

      <h1 className="text-base ">Tickets Available: {available}</h1>
      <h1 className="text-base">Tickets Reserved: {32 - available}</h1>

      {bookings.length > 0 ? (
        <div className="relative my-5 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 text-center py-3">
                  Name
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Email
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Seat No
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Date Of Booking
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((curElm) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium max-w-[220px] truncate  text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {curElm.firstName} {curElm.lastName}
                  </th>
                  <td className="px-6 py-4 max-w-[270px] truncate">
                    {" "}
                    {curElm.email}
                  </td>
                  <td className="px-6 py-4">
                    {curElm.seatNo.map((seats, index) => (
                      <>
                        {index != 0 && ","} {seats.seatNo}
                      </>
                    ))}
                  </td>
                  <td className="px-6 py-4"> {curElm.dateOfBooking}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      data-modal-target="staticModal"
                      data-modal-toggle="staticModal"
                      className="block text-white bg-sky-400 hover:bg-sky-600 focus:ring-2 focus:outline-none focus:ring-sky-300 font-medium rounded-md text-sm w-16 py-2 text-center "
                      type="button"
                      onClick={() => updateHandler(curElm)}
                    >
                      Edit
                    </button>
                    <button
                      data-modal-target="staticModal"
                      data-modal-toggle="staticModal"
                      className="block text-white bg-red-500 hover:bg-red-600 w-16	 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm  py-2 text-center "
                      type="button"
                      onClick={() => removeHandler(curElm)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center mt-10 font-semibold text-gray-600">
          Unfortunately, there are currently no tickets booked in our system.{" "}
        </h3>
      )}
    </div>
  );
};

export default Reservations;
