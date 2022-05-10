import { format } from 'date-fns';
import React from 'react';

const AvilableAppointment = ({date}) => {
    return (
        <div>
           <h4 className='text-secondary font-bold text-center text-xl'> Avilable Appointment on {format(date, "PP")}</h4>
        </div>
    );
};

export default AvilableAppointment;