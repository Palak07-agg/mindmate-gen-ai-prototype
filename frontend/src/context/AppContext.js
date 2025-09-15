import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mood, setMood] = useState(null);
  const [journalEntries, setJournalEntries] = useState([]);

  const addJournalEntry = (entry) => {
    setJournalEntries((prev) => [...prev, { text: entry, date: new Date() }]);
  };

  return (
    <AppContext.Provider value={{ mood, setMood, journalEntries, addJournalEntry }}>
      {children}
    </AppContext.Provider>
  );
};
