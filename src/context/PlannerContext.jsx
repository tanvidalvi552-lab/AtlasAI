import React, { createContext, useContext, useState } from 'react';
import { fetchLiveItineraryMatrix } from '../services/plannerAPI';

const PlannerContext = createContext();

export function PlannerProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [errorLog, setErrorLog] = useState(null);

  const generateItinerary = async (formData) => {
    setLoading(true);
    setCurrentPlan(null);
    setErrorLog(null);

    try {
      // Dispatches actual live asynchronous runtime requests down the wire!
      const dataPayload = await fetchLiveItineraryMatrix(
        formData.destination,
        formData.days,
        formData.style,
        formData.budget
      );
      setCurrentPlan(dataPayload);
    } catch (err) {
      setErrorLog('System compilation failure. Please check terminal logs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PlannerContext.Provider value={{ loading, currentPlan, errorLog, generateItinerary }}>
      {children}
    </PlannerContext.Provider>
  );
}

export const usePlanner = () => useContext(PlannerContext);