"use client";
import { useState, useEffect } from 'react';

const states = [
  { name: "Baden-Württemberg" },
  { name: "Bayern" },
  { name: "Berlin" },
  { name: "Brandenburg" },
  { name: "Bremen" },
  { name: "Hamburg" },
  { name: "Hessen" },
  { name: "Mecklenburg-Vorpommern" },
  { name: "Niedersachsen" },
  { name: "Nordrhein-Westfalen" },
  { name: "Rheinland-Pfalz" },
  { name: "Saarland" },
  { name: "Sachsen" },
  { name: "Sachsen-Anhalt" },
  { name: "Schleswig-Holstein" },
  { name: "Thüringen" },
];

export default function Home() {
  const [selectedState, setSelectedState] = useState<string>("Berlin");

  useEffect(() => {
    // Load selected state from local storage on initial render
    const savedState = localStorage.getItem('selectedState');
    if (savedState) {
      setSelectedState(savedState);
    } else {
      localStorage.setItem('selectedState', "Berlin");
    }
  }, []);

  const handleStateSelection = (stateName: string) => {
    setSelectedState(stateName);
    localStorage.setItem('selectedState', stateName);
  };

  return (
    <div className="flex flex-col p-4 items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">Select a State</h2>
        <div className="space-y-2">
          {states.map((state, index) => {
            const isSelected = selectedState === state.name;

            return (
              <label
                key={index}
                className={`block p-3 rounded-lg cursor-pointer hover:bg-green-600 ${
                  isSelected ? "bg-green-600 text-white" : "bg-blue-500 text-white"
                }`}
                onClick={() => handleStateSelection(state.name)}
              >
                <input
                  type="radio"
                  name="state"
                  className="hidden"
                  checked={isSelected}
                  readOnly
                />
                {state.name}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
