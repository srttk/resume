import React from "react";

type props = {
  title?: string | null;
  items?: string[];
};

export default function Skils({ title = null, items = [] }: props) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <div className="flex text-xs space-x-3">
        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
