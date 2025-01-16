import React from "react";
import { useGameContext } from "../../contexts/GameContext";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const Settings: React.FC = () => {
  const { isDay, toggleDayNight } = useGameContext();

  return (
    <div className="w-full">
      <button
        onClick={toggleDayNight}
        className="w-full justify-center flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        {isDay ? (
          <>
            <MoonIcon className="w-5 h-5 text-yellow-400" />
            <span>Night</span>
          </>
        ) : (
          <>
            <SunIcon className="w-5 h-5 text-orange-500" />
            <span>Day</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Settings;
