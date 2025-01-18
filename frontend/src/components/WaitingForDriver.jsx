import React from 'react';

const WaitingForDriver = (props) => {
  // Safe call for props.waitingForDriver
  const handleClose = () => {
    if (typeof props.waitingForDriver === 'function') {
      props.waitingForDriver(false);
    } else {
      console.warn('waitingForDriver is not a function.');
    }
  };

  // Safely extract fullName and ensure it's a string
  const fullName = String(props.ride?.captain?.fullname || '');
  const firstName = fullName.split(' ')[0] || 'Captain'; // Use a default name if split fails

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={handleClose}
      >
        <i className="text-3xl text-blue-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium capitalize">{firstName}</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">
            {props.ride?.captain?.vehicle?.plate || 'N/A'}
          </h4>
          <p className="text-sm text-blue-600">Maruti Suzuki Alto</p>
          <h1 className="text-lg font-semibold">{props.ride?.otp || '0000'}</h1>
        </div>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup || 'Unknown Pickup'}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination || 'Unknown Destination'}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare || '0.00'}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
