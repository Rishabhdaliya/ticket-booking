import React from "react";
import "./Seats.css";
import wheel from "../../../assets/wheel.png";

const Seats = ({ label }) => {
  return (
    <div className="booking__container ">
      <h4 className="ml-3 text-gray-700">{label}</h4>
      <div className="seats">
        <img className="seats__wheel" src={wheel} alt="" />
        <div className="seprator"></div>
        <div className="seats__arrange">
          <div className="seats__arrangeDouble">
            <div className="seats__Shape seat__booked">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape selected">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
          </div>
          <div className="seats__arrangeSingle">
            {" "}
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
            <div className="seats__Shape">
              <div className="seat__pillow"></div>1
            </div>
          </div>
        </div>
        <div className="seats__arrangelast">
          <div className="seats__Shapelast">
            <div className="seat__lastpillow"></div>1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seats;
