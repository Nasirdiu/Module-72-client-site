import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentServices from "./AppointmentServices";

const AvilableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-secondary font-bold text-center text-xl">
        {" "}
        Avilable Appointment on {format(date, "PP")}
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <AppointmentServices
            key={service._id}
            service={service}
          ></AppointmentServices>
        ))}
      </div>
    </div>
  );
};

export default AvilableAppointment;
