import React, { useState } from "react";
import "./Ticket.css";
import barcode from "../../../assets/barcode.png";
import { Link } from "react-router-dom/dist";

const Ticket = ({ ticketData }) => {
  console.log(ticketData);
  return (
    <>
      <h1 className="text-gray-700 font-semibold text-center pb-1">
        Congratulations! You've successfully booked your ticket!
      </h1>
      <p className="text-gray-500 text-sm font-light text-center pb-3">
        We're thrilled to inform you that your ticket has been confirmed and
        secured for your upcoming journey.
      </p>
      <div className="ticket">
        <div class="relative">
          <img
            className="ticket__img"
            src="https://images.unsplash.com/photo-1598710877888-edaa20acfb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80"
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p class="text-lg font-bold flex justify-between">MUM - DEL</p>
          </div>
        </div>

        <div className="py-4 p-4">
          <h3 className="text-gray-500 text-xs font-light">PASSENGER</h3>
          <h3 className="text-gray-800 truncate  uppercase text-sm font-semibold">
            {ticketData.firstName} {ticketData.lastName}
          </h3>
          <div className="py-1 ">
            <h3 className="text-gray-500 uppercase text-xs font-light">
              SEAT NO
            </h3>
            {ticketData?.seatNo?.map((item, index) => (
              <div
                key={index}
                className="flex gap-1"
                style={{ display: "inline-block" }}
              >
                <h3 className="text-gray-900 text-sm font-semibold">
                  {index !== 0 && ","} {item.seatNo}
                </h3>
              </div>
            ))}
          </div>
          <div className="py-1 ">
            <h3 className="text-gray-500 uppercase text-xs font-normal">
              {ticketData.dateOfBooking}
            </h3>
          </div>
          <img className="ticket__barcode" src={barcode} alt="" />
        </div>
        <div className="ticket__seprator py-1"></div>
        <p className="italic text-gray-600 px-4 pt-2 pb-4    text-xs">
          Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Cupiditate.
        </p>
      </div>
      <Link to="/">
        <button class="bg-transparent flex items-center gap-3 text-base hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">
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
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          Dashboard
        </button>
      </Link>
    </>
  );
};

export default Ticket;
