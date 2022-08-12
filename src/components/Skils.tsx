import React from "react";

type props = {
  title?: string | null;
  items?: string[];
};

export default function Skils({ title = null, items = [] }: props) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <div className="flex flex-wrap text-xs">
        {items.map((item, index) => (
          <span key={index} className="px-1 py-1 ">
            <span className="bg-gray-50 dark:bg-slate-800 px-1 py-0.5 rounded-lg bg-opacity-50">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
