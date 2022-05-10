import React from "react";

const AppointmentServices = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl justify-center items-center">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions ">
          <button
            disabled={slots.length === 0}
            class="btn btn-secondary uppercase text-white"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServices;
