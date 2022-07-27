import React from "react";

type props = {
  title?: string | null;
  description?: string | null;
  year?: string | null;
};
export default function Education({
  title = null,
  description = null,
  year = null,
}: props) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <div className=" text-gray-600 dark:text-gray-400  ">
        <p className="text-sm">{description}</p>
        <p className="text-sm">{year}</p>
      </div>
    </div>
  );
}
