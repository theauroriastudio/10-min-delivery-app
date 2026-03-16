import React from "react";
import { useNavigate } from "react-router-dom";
import { FileUp, Stethoscope, TestTube, Package } from "lucide-react";
import { quickActions } from "../data/mockData";

const iconMap = {
  FileUp: FileUp,
  Stethoscope: Stethoscope,
  TestTube: TestTube,
  Package: Package,
};

const QuickActions = () => {
  const navigate = useNavigate();

  const handleAction = (action) => {
    if (action.title === "Consult Doctor") {
      navigate("/consult");
    } else if (action.title === "Lab Tests") {
      navigate("/lab-tests");
    }
  };

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-4 gap-3">
        {quickActions.map((action) => {
          const IconComponent = iconMap[action.icon];
          return (
            <button
              key={action.id}
              onClick={() => handleAction(action)}
              className="flex flex-col items-center group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                style={{ backgroundColor: `${action.color}15` }}
              >
                <IconComponent
                  className="w-6 h-6"
                  style={{ color: action.color }}
                />
              </div>
              <p className="text-xs text-gray-700 font-medium text-center leading-tight">
                {action.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
