"use client";

import { createContext, useContext, useState } from "react";

const initialState = { from: null, to: null };
const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => {
    setRange(initialState);
  };
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error(
      "ReservationContext was used outside the ReservationProvider."
    );
  return context;
}

export { ReservationProvider, useReservation };
