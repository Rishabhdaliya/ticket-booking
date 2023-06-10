import React from "react";
import BookingForm from "../Booking/Booking form/BookingForm";

const EditBooking = ({ setOpen, updateData }) => {
  const handleClose = () => {
    // Function to close the modal
    setOpen(false);
  };
  return (
    <div>
      <div
        className="relative   z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Background overlay */}
        <div className="fixed inset-0  bg-gray-900 bg-opacity-75 transition-opacity"></div>

        {/* Modal container */}
        <div className="fixed  mx-auto inset-0 z-10  overflow-y-auto">
          <div className="flex  min-h-full  items-end justify-center p-4 text-center sm:items-center  sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
              {/* Render the BookingForm component */}
              <BookingForm
                handleClose={handleClose}
                updateData={updateData}
                isUpdate
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooking;
