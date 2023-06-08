import React from "react";
import "./Dashboard.css";
import Layout from "../Layout/Layout";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Layout>
        <div className="container">
          <h1 className="text-red-500 text-xl font-semibold text-center pt-5">
            Welcome to Bus-App!
          </h1>
          <h5 className="text-gray-500 font-normal text-sm text-center py-3">
            Would you like to book a ticket?
          </h5>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
