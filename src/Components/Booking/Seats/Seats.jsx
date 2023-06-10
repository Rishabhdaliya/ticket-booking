import React, { useState } from "react";
import "./Seats.css";
import wheel from "../../../assets/wheel.png";

const Seats = ({ label, births, selectedSeat, selectionHandler }) => {
  return (
    <div className="booking__container ">
      <h4 className="ml-3 text-gray-700">{label}</h4>
      <div className="seats">
        {/* Wheel image */}
        <img
          style={{ visibility: label === "Upper Deck" && "hidden" }}
          className="seats__wheel "
          src={wheel}
          alt=""
        />
        {/* Separator */}
        <div
          className="seprator"
          style={{ visibility: label === "Upper Deck" && "hidden" }}
        >
          &nbsp;
        </div>
        <div className="seats__arrange">
          <div className="seats__arrangeDouble">
            {/* Render first 10 seats */}
            {births
              .filter((item, index) => index < 10)
              .map((item, index) => (
                <div
                  onClick={() => selectionHandler(item)}
                  key={index}
                  className={`seats__Shape ${item.isBooked && "seat__booked"} ${
                    !item.isBooked &&
                    selectedSeat.filter((curElm) => curElm._id === item._id)
                      .length > 0 &&
                    "selected"
                  } `}
                >
                  <div className="seat__pillow"></div>
                  {item.seatNo}
                </div>
              ))}
          </div>
          <div className="seats__arrangeSingle">
            {/* Render next 5 seats */}
            {births
              .filter((item, index) => index > 9 && index < 15)
              .map((item, index) => (
                <div
                  onClick={() => selectionHandler(item)}
                  key={index}
                  className={`seats__Shape ${item.isBooked && "seat__booked"} ${
                    !item.isBooked &&
                    selectedSeat.filter((curElm) => curElm._id === item._id)
                      .length > 0 &&
                    "selected"
                  } `}
                >
                  <div className="seat__pillow"></div>
                  {item.seatNo}
                </div>
              ))}
          </div>
        </div>
        <div className="seats__arrangelast">
          {/* Render the last seat */}
          {births
            .filter((item, index) => index === 15)
            .map((item, index) => (
              <div
                onClick={() => selectionHandler(item)}
                key={index}
                className={`seats__Shapelast ${
                  item.isBooked && "seat__booked"
                } ${
                  !item.isBooked &&
                  selectedSeat.filter((curElm) => curElm._id === item._id)
                    .length > 0 &&
                  "selected"
                } `}
              >
                <div className="seat__lastpillow"></div>
                {item.seatNo}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Seats;
