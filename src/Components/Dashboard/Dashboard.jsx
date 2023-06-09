import React, { useState } from "react";
import "./Dashboard.css";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import Reservations from "./Reservations";
import busBg from "../../assets/busbg.png";

const Dashboard = () => {
  const { bookings } = useSelector((state) => state.ticket);

  return (
    <div className="dashboard">
      <Layout>
        <div className="container">
          <h1 className="text-red-500 text-3xl font-semibold text-center pt-5">
            Welcome to Bus-App!
          </h1>
          <h5 className="text-gray-700 font-md text-sm text-center py-3">
            Would you like to book a ticket?
          </h5>

          <Reservations />
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
