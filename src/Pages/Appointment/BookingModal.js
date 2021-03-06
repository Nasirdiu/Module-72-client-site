import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment;
  const handleSubmit=event=>{
    event.preventDefault()
    const slot=event.target.slot.value;
    console.log(_id,name,slot);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking For :{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 justify-items-center mt-3">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="Submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
