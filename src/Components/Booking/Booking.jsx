import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import Seats from "./Seats/Seats";
import "./Booking.css";
import BookingForm from "./Booking form/BookingForm";
import Ticket from "./Ticket/Ticket";
import { useState } from "react";
import moment from "moment";

const Booking = () => {
  const { ticketDetails } = useSelector((state) => state.ticket);
  // Step state to manage the current step in the booking process
  const [step, setStep] = useState(1);
  // State to keep track of the selected seats
  const [selectedSeat, setSelectedSeat] = useState([]);
  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreeTerms: false,
  });

  // Handler for seat selection
  const selectionHandler = (seat) => {
    if (seat.isBooked) {
      return alert("This seat is Reserved!");
    }

    if (selectedSeat.includes(seat)) {
      // If seat is already selected, remove it from the array
      setSelectedSeat(
        selectedSeat.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else if (selectedSeat.length < 2) {
      // If maximum selection limit is not reached, add the seat to the array
      setSelectedSeat([...selectedSeat, seat]);
    } else {
      alert("You can Book maximum Two tickets at a time");
    }
  };

  // Function to get the current date and time
  function getCurrentDateTime() {
    const currentDate = moment();
    const formattedDateTime = currentDate.format("MMM-DD-YYYY [AT] hh:mmA");
    return formattedDateTime;
  }

  // Handler for the next step button
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Handler for the previous step button
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <Layout>
        <div className="booking">
          <div className="flex justify-center mb-4 items-center">
            <div className="flex justify-center w-96">
              {/* Button for previous step */}
              {step != 3 && (
                <button
                  className={`${
                    step === 1 ? "bg-gray-400" : "bg-red-500"
                  } text-white py-1 px-2 text-sm font-semibold flex gap-1 items-center rounded-l`}
                  onClick={handlePrevStep}
                  disabled={step === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  Previous
                </button>
              )}

              {/* Step indicator */}
              <div className="flex justify-center mx-auto  text-sm font-semibold  items-center bg-red-500 text-white py-1 px-2">
                Step {step}
              </div>

              {/* Button for next step */}
              {step != 3 && (
                <button
                  style={{ visibility: step === 2 && "hidden" }}
                  className={`${
                    step === 3 || selectedSeat.length === 0
                      ? "bg-gray-400"
                      : "bg-red-500"
                  } text-white flex gap-1  text-sm font-semibold  items-center py-1 px-2 rounded-r`}
                  onClick={handleNextStep}
                  disabled={step === 3 || selectedSeat.length === 0}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Display message for step 1 */}
          {step === 1 && (
            <h1 className="bg-red-500 text-sm w-96 mx-auto rounded-sm  text-center text-white ">
              Click on an Available Seats to proceed with your transaction
            </h1>
          )}
          {step === 1 && (
            <div className="my-2">
              {/* Render seats for lower deck */}
              <Seats
                selectedSeat={selectedSeat}
                selectionHandler={selectionHandler}
                births={ticketDetails.filter((item) => item._id < 17)}
                label={"Lower Deck"}
              />
            </div>
          )}
          {step === 1 && (
            <div className="my-2">
              {/* Render seats for upper deck */}
              <Seats
                selectedSeat={selectedSeat}
                selectionHandler={selectionHandler}
                births={ticketDetails.filter((item) => item._id > 16)}
                label={"Upper Deck"}
              />
            </div>
          )}

          {/* Render booking form for steps 2 */}
          {step > 1 && (
            <BookingForm
              getCurrentDateTime={getCurrentDateTime}
              selectedSeat={selectedSeat}
              step={step}
              handleNextStep={handleNextStep}
              setFormData={setFormData}
              formData={formData}
            />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Booking;
