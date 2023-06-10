import React, { useEffect, useState } from "react";
import "./BookingForm.css";
import { useDispatch } from "react-redux";
import {
  bookTicket,
  updateBooking,
} from "../../../redux/features/tickets/TicketSlice";
import Ticket from "../Ticket/Ticket";

const BookingForm = ({
  formData: initialFormData,
  selectedSeat,
  handleNextStep,
  getCurrentDateTime,
  handleClose,
  isUpdate,
  updateData,
  step,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const [ticketData, setTicketData] = useState(initialFormData);

  useEffect(() => {
    // Update the form data with the existing booking details for updating
    if (isUpdate && updateData != null) {
      setFormData({
        firstName: updateData.firstName,
        lastName: updateData.lastName,
        email: updateData.email,
        agreeTerms: true,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      seatNo: selectedSeat,
      dateOfBooking: getCurrentDateTime(),
    };
    setTicketData(bookingDetails);
    dispatch(bookTicket(bookingDetails));

    // Perform validation or any other necessary logic
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.agreeTerms
    ) {
      return alert("Fill the Details first and confirm Booking");
    }

    // Go to Next Step
    handleNextStep();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    debugger;

    const bookingDetails = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      _id: updateData._id,
    };

    dispatch(updateBooking(bookingDetails));
    handleClose();
  };

  console.log(formData);
  return (
    <div className="container">
      {step === 3 && <Ticket ticketData={ticketData} />}
      {step === 2 || isUpdate ? (
        <div className="bookingForm">
          <div className="bg-red-500 font-normal  px-6 py-3 flex justify-between items-center rounded-t-lg  text-center text-white">
            Confirm Booking
            {isUpdate && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                onClick={handleClose}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-auto cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <form
            className=" p-7 pb-10"
            onSubmit={isUpdate ? handleUpdate : handleSubmit}
          >
            <div className="grid  gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  name="firstName"
                  value={formData?.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                  name="lastName"
                  value={formData?.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
                name="email"
                value={formData?.email}
                onChange={handleChange}
              />
            </div>

            {!isUpdate && (
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    name="agreeTerms"
                    value={formData?.agreeTerms}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the&nbsp;
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                </label>
              </div>
            )}
            {isUpdate ? (
              <button
                type="submit"
                className="text-white bg-red-500   hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold	 rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Update Booking
              </button>
            ) : (
              <button
                type="submit"
                className="text-white bg-red-500   hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold	 rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Book Ticket
              </button>
            )}
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookingForm;
