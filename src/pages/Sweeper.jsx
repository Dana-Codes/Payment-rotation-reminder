import React, { useState, useEffect } from "react";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai"; // Import calendar and user icons
import { BiLoaderCircle } from "react-icons/bi";
const people = [
  "Mr Daniel",
  "Mr Samson",
  "Mr Ola",
  "Person 4",
  "Person 5",
  "Person 6",
];

function PaymentCard({ name, paymentDate, countdown }) {
  const hours = Math.floor(countdown / 60);
  const minutes = countdown % 60;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <AiOutlineUser className="text-2xl mr-2" /> {/* User icon */}
          <div className="font-bold text-xl">{name}</div>
        </div>
        <p className="text-gray-700 text-base">
          <AiOutlineCalendar className="inline-block mr-2" /> {paymentDate}
        </p>
        <div className="text-gray-700 text-base mt-2">
          Next payment in: {hours} hours {minutes} minutes
        </div>
      </div>
    </div>
  );
}

function Sweeper() {
  const [loading, setLoading] = useState(true);
  const [currentPayerIndex, setCurrentPayerIndex] = useState(0);
  const [nextPayerIndex, setNextPayerIndex] = useState(1); // Person 2 is next
  const [countdown, setCountdown] = useState(14 * 24 * 60); // Initial countdown in minutes
  const currentDate = new Date();

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      const currentPayer = people[currentPayerIndex];
      const nextPayer = people[nextPayerIndex];

      console.log(
        `${currentPayer} paid. Next up is ${nextPayer} on ${currentDate.toDateString()}`
      );

      setCurrentPayerIndex((currentPayerIndex + 1) % people.length);
      setNextPayerIndex((nextPayerIndex + 1) % people.length);

      currentDate.setDate(currentDate.getDate() + 14);
      setCountdown(14 * 24 * 60); // Reset countdown to 14 days in minutes

      // Start a new countdown
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 60 * 1000); // Update countdown every 1 minute in milliseconds

      // Clear countdown interval when it reaches 0
      if (countdown === 1) {
        clearInterval(countdownInterval);
      }
    }, 14 * 24 * 60 * 60 * 1000); // Update every 14 days in milliseconds

    // Clear loading timeout when component unmounts
    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(interval);
    };
  }, [currentPayerIndex, nextPayerIndex, countdown]);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <div className="text-2xl">
          <BiLoaderCircle />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-4">Payment Rotation</h1>
          <PaymentCard
            name={people[currentPayerIndex]}
            paymentDate={currentDate.toDateString()}
            countdown={countdown}
          />
          <div className="mt-4">Next up: {people[nextPayerIndex]}</div>
        </div>
      )}
    </div>
  );
}

export default Sweeper;
