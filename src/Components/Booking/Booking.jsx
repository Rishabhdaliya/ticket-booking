import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import Seats from "./Seats/Seats";
import "./Booking.css";
import BookingForm from "./Booking form/BookingForm";
import Ticket from "./Ticket/Ticket";
import { useState } from "react";

const Booking = () => {
  const contact = useSelector((state) => state);
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <Layout>
        <div className="booking">
          <div className="flex justify-center mb-4 items-center">
            <div className="flex justify-center w-96">
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
              <div className="flex justify-center mx-auto  text-sm font-semibold  items-center bg-red-500 text-white py-1 px-2">
                Step {step}
              </div>
              {step != 3 && (
                <button
                  className={`${
                    step === 3 ? "bg-gray-400" : "bg-red-500"
                  } text-white flex gap-1  text-sm font-semibold  items-center py-1 px-2 rounded-r`}
                  onClick={handleNextStep}
                  disabled={step === 3}
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
          {step === 1 && (
            <h1 className="bg-red-500 text-sm w-96 mx-auto rounded-sm  text-center text-white ">
              Click on an Available Seats to proceed with your transaction
            </h1>
          )}
          {step === 1 && (
            <div className="my-2">
              <Seats label={"Lower Deck"} />
            </div>
          )}
          {step === 1 && (
            <div className="my-2">
              <Seats label={"Upper Deck"} />
            </div>
          )}
          {step === 2 && <BookingForm />}
          {step === 3 && <Ticket />}
        </div>
      </Layout>
    </div>
  );
};

export default Booking;
