import { useState, useEffect } from "react";
import { getRandomFact } from "../services/leads";

export function useLeads() {
  const [leads, setLeads] = useState([{ id: "", name: "" }]);

  const refreshLeads = () => {
    getRandomFact().then((newFact) => setLeads(newFact));
  };

  // para recuperar la cita al cargar la página
  useEffect(refreshLeads, []);

  return { leads, refreshLeads };
}
