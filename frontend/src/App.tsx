import { useEffect } from "react";
import { useLeads } from "./hooks/useLeads"
import "./App.css";

function App() {
  const { leads, refreshLeads } = useLeads()
  useEffect(() => {
    console.log({ leads });
  }, [leads])


  return (
    <div className="App">
      <p>Hola</p>
      {leads && leads.map((v) =>
      (
        <p key={v.id}>{v.name}</p>
      )
      )}
    </div>
  );
}

export default App;


