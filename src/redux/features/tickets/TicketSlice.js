import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  // Ticket details data array
  // Each ticket object represents a seat
  ticketDetails: [
    {
      _id: 1,
      seatNo: "L1A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 2,
      seatNo: "L2A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 3,
      seatNo: "L3A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 4,
      seatNo: "L4A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 5,
      seatNo: "L5A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 6,
      seatNo: "L1B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 7,
      seatNo: "L2B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 8,
      seatNo: "L3B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 9,
      seatNo: "L4B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 10,
      seatNo: "L5B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 11,
      seatNo: "L1C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 12,
      seatNo: "L2C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 13,
      seatNo: "L3C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 14,
      seatNo: "L4C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 15,
      seatNo: "L5A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 16,
      seatNo: "L6D",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 17,
      seatNo: "U1A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 18,
      seatNo: "U2A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 19,
      seatNo: "U3A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 20,
      seatNo: "U4A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 21,
      seatNo: "U5A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 22,
      seatNo: "U1B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 23,
      seatNo: "U2B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 24,
      seatNo: "U3B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 25,
      seatNo: "U4B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 26,
      seatNo: "U5B",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 27,
      seatNo: "U1C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 28,
      seatNo: "U2C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 29,
      seatNo: "U3C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 30,
      seatNo: "U4C",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 31,
      seatNo: "U5A",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
    {
      _id: 32,
      seatNo: "U6D",
      createdAt: "",
      updatedAt: "",
      isBooked: false,
    },
  ],
  bookings: [], // Array to store booked tickets
};

const ticket = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    bookTicket: (state, action) => {
      // Loop through each seat number in the payload
      action.payload.seatNo.forEach((seat) => {
        // Find the corresponding ticket in the ticketDetails array based on seatNo
        const ticketIndex = state.ticketDetails.findIndex(
          (ticket) => ticket._id === seat._id
        );
        // If the ticket is found, update the isBooked and dateOfBooking properties
        if (state.ticketIndex !== -1) {
          state.ticketDetails[ticketIndex].isBooked = true;
          state.ticketDetails[ticketIndex].createdAt =
            action.payload.dateOfBooking;
          state.ticketDetails[ticketIndex].updatedAt =
            action.payload.dateOfBooking;
        }
      });

      // Generate a unique ID for the booking
      const _id = uuidv4();
      const updated = { ...action.payload, _id };

      // Add the booking to the bookings array
      state.bookings = [...state.bookings, updated];
    },
    updateBooking: (state, action) => {
      // Function to update a booking in the bookings array
      function updateBooking() {
        return state.bookings.map((booking) => {
          if (booking._id === action.payload._id) {
            return { ...booking, ...action.payload };
          }
          return booking;
        });
      }
      state.bookings = updateBooking();
    },
    removeBooking: (state, action) => {
      // Loop through each seat number in the payload
      action.payload.seatNo.forEach((seat) => {
        // Find the corresponding ticket in the ticketDetails array based on seatNo
        const ticketIndex = state.ticketDetails.findIndex(
          (ticket) => ticket._id === seat._id
        );
        // If the ticket is found, update the isBooked and dateOfBooking properties
        if (state.ticketIndex !== -1) {
          state.ticketDetails[ticketIndex].isBooked = false;
          state.ticketDetails[ticketIndex].createdAt =
            action.payload.dateOfBooking;
          state.ticketDetails[ticketIndex].updatedAt =
            action.payload.dateOfBooking;
        }
      });

      // Remove the booking from the bookings array
      const filteredTickets = state.bookings.filter(
        (item) => item?._id != action.payload._id
      );
      state.bookings = [...filteredTickets]; // Update the bookings array
    },
  },
});

export const { bookTicket, updateBooking, removeBooking } = ticket.actions;

export default ticket.reducer;
